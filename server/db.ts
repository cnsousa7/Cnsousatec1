import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, testimonials, InsertTestimonial, portfolioProjects, InsertPortfolioProject, files, InsertFile } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Testimonials queries
export async function getApprovedTestimonials() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(testimonials).where(eq(testimonials.status, 'approved')).orderBy(testimonials.createdAt);
}

export async function createTestimonial(data: InsertTestimonial) {
  const db = await getDb();
  if (!db) throw new Error('Database not available');
  const result = await db.insert(testimonials).values(data);
  return result;
}

// Portfolio queries
export async function getPortfolioProjects() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(portfolioProjects).orderBy(portfolioProjects.createdAt);
}

export async function createPortfolioProject(data: InsertPortfolioProject) {
  const db = await getDb();
  if (!db) throw new Error('Database not available');
  return db.insert(portfolioProjects).values(data);
}

// Files queries
export async function createFile(data: InsertFile) {
  const db = await getDb();
  if (!db) throw new Error('Database not available');
  return db.insert(files).values(data);
}

export async function getUserFiles(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(files).where(eq(files.userId, userId)).orderBy(files.uploadedAt);
}

// Testimonials admin functions
export async function getAllTestimonials() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(testimonials).orderBy(testimonials.createdAt);
}

export async function approveTestimonial(id: number) {
  const db = await getDb();
  if (!db) throw new Error('Database not available');
  return db.update(testimonials)
    .set({ status: 'approved' })
    .where(eq(testimonials.id, id));
}

export async function rejectTestimonial(id: number) {
  const db = await getDb();
  if (!db) throw new Error('Database not available');
  return db.update(testimonials)
    .set({ status: 'rejected' })
    .where(eq(testimonials.id, id));
}
