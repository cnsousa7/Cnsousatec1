import { Express, Request, Response } from 'express';
import { storagePut } from './storage';
import multer from 'multer';
import { nanoid } from 'nanoid';

const upload = multer({ storage: multer.memoryStorage() });

export function setupUploadRoute(app: Express) {
  app.post('/api/upload', upload.single('file'), async (req: Request, res: Response) => {
    try {
      const file = (req as any).file;
      const user = (req as any).user;

      if (!file) {
        return res.status(400).json({ error: 'No file provided' });
      }

      if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const userId = user.id;
      const fileBuffer = file.buffer;
      const fileName = file.originalname;
      const mimeType = file.mimetype;

      // Generate unique file key
      const fileId = nanoid();
      const fileKey = `uploads/${userId}/${fileId}-${fileName}`;

      // Upload to S3
      const { url, key } = await storagePut(fileKey, fileBuffer, mimeType);

      res.json({
        url,
        key,
        fileName,
        mimeType,
        size: file.size,
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Upload failed' });
    }
  });
}
