import { Metadata } from "next";

import PostsList from "@/components/app-blog/posts-list";
import SectionHeader from "@/components/section-header";
import { env } from "@/env/client";
import { generateCommonMetadata } from "@/lib/metadata";
import { getPosts } from "@/lib/posts";

const title = "All Posts of AI for Healthcare Hub";
const description = "Explore all posts of AI for Healthcare Hub";
const url = `${env.NEXT_PUBLIC_BASE_URL}/blog`;
const imageUrl = `${env.NEXT_PUBLIC_OPENGRAPH_PIC}`;
const keywords = [
  "AI for healthcare",
  "medical imaging analysis",
  "electronic health records",
  "drug discovery",
  "AI in healthcare",
  "AI in medicine",
];

export const metadata: Metadata = generateCommonMetadata({
  title,
  description,
  url,
  imageUrl,
  keywords,
});

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <section className="container mx-auto min-h-screen py-20">
      <SectionHeader title="Blog" h1={true} />
      <PostsList posts={posts} />
    </section>
  );
}
