import { defineCollection, z } from 'astro:content';

// 博客文章集合定义
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// 视频内容集合定义
const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    videoUrl: z.string(),
    thumbnailImage: z.string().optional(),
  }),
});

// 导出集合配置
export const collections = {
  'blog': blogCollection,
  'videos': videosCollection,
};
