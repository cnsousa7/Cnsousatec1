import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { 
  getApprovedTestimonials, 
  createTestimonial, 
  getAllTestimonials,
  approveTestimonial,
  rejectTestimonial,
  getPortfolioProjects, 
  createPortfolioProject, 
  createFile, 
  getUserFiles 
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  testimonials: router({
    list: publicProcedure.query(() => getApprovedTestimonials()),
    listAll: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new Error('Unauthorized');
      }
      return getAllTestimonials();
    }),
    create: protectedProcedure
      .input(z.object({
        name: z.string().min(1),
        company: z.string().optional(),
        email: z.string().email(),
        serviceType: z.string().min(1),
        text: z.string().min(10),
        rating: z.number().min(1).max(5).default(5),
      }))
      .mutation(async ({ input }) => {
        return createTestimonial({
          ...input,
          status: 'pending',
        });
      }),
    approve: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return approveTestimonial(input.id);
      }),
    reject: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return rejectTestimonial(input.id);
      }),
  }),

  portfolio: router({
    list: publicProcedure.query(() => getPortfolioProjects()),
    create: protectedProcedure
      .input(z.object({
        title: z.string().min(1),
        description: z.string().min(10),
        category: z.string().min(1),
        results: z.string().optional(),
        featured: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        return createPortfolioProject(input);
      }),
  }),

  files: router({
    upload: protectedProcedure
      .input(z.object({
        fileName: z.string().min(1),
        fileUrl: z.string().url(),
        fileKey: z.string().min(1),
        mimeType: z.string().optional(),
        fileSize: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        return createFile({
          ...input,
          userId: ctx.user.id,
        });
      }),
    list: protectedProcedure.query(({ ctx }) => {
      return getUserFiles(ctx.user.id);
    }),
  }),
});

export type AppRouter = typeof appRouter;
