import { CollectionEntry, getCollection } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;
export type BlogEntries = BlogEntry[];

// Return the blog entries sorted by date, newest first
export const getBlogCollection = async (): Promise<BlogEntries> => {
  const blogEntries = await getCollection("blog");
  blogEntries.sort((b1, b2) => b2.data.date.getTime() - b1.data.date.getTime());
  return blogEntries;
};
