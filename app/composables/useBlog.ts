import type { BlogPost } from "~/types/blog";
import posts from "~/data/posts.json";
import { toPersianDigits } from "~/lib/utils";

export function useBlogPosts(): BlogPost[] {
  return [...(posts as BlogPost[])].sort((a, b) => b.date.localeCompare(a.date));
}

export function useBlogPost(slug: string): BlogPost | undefined {
  return useBlogPosts().find((post) => post.slug === slug);
}

export function formatBlogAuthors(authors: string[]): string {
  return authors.join("، ");
}

export function formatReadingTime(minutes: number): string {
  return `${toPersianDigits(minutes)} دقیقه مطالعه`;
}
