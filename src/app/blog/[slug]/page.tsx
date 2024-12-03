import Image from "next/image";
import { notFound } from "next/navigation";

import MDXContent from "@/components/mdx-content";
import { env } from "@/env/client";
import { generateCommonMetadata } from "@/lib/metadata";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const generateStaticParams = async () => {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  const title = `${post?.metadata.title} - AI for Healthcare Hub`;
  const description = post?.metadata.description;
  const url = `${env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`;
  const imageUrl = `${env.NEXT_PUBLIC_OPENGRAPH_PIC}`;
  const keywords = [
    "AI for healthcare",
    "medical imaging analysis",
    "electronic health records",
    "drug discovery",
    "AI in healthcare",
    "AI in medicine",
  ];

  return generateCommonMetadata({
    title: title ?? "",
    description: description ?? "",
    url,
    imageUrl,
    keywords,
  });
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content, metadata } = post;
  const { title, image, publishedAt } = metadata;

  return (
    // <section className="py-20">
    //   <div className="container max-w-4xl">
    //     <Link
    //       href="/blog"
    //       className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
    //       <ArrowLeftIcon className="h-5 w-5" />
    //       <span>Back to posts</span>
    //     </Link>

    //     {image && (
    //       <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
    //         <Image
    //           src={image}
    //           alt={title || ""}
    //           className="object-cover"
    //           fill
    //         />
    //       </div>
    //     )}

    //     <header>
    //       <h1 className="">{title}</h1>
    //       <p className="mt-3 text-xs text-muted-foreground">
    //         {formatDate(publishedAt ?? "")}
    //       </p>
    //     </header>

    //     <article className="prose mt-16">
    //       <MDXContent source={content} />
    //     </article>
    //   </div>
    // </section>
    <section className="container min-h-screen py-20">
      <article className="prose mx-auto max-w-4xl">
        {image && (
          <div className="relative mx-auto mb-8 h-[300px] max-w-[600px] overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src={`${env.NEXT_PUBLIC_BLOG_IMAGE}${image}`}
              alt={title || ""}
              className="rounded-lg object-cover"
              fill
            />
          </div>
        )}
        <h1 className="font-bricolage text-3xl md:text-4xl">{title}</h1>
        <p className="mt-3 text-xs text-muted-foreground">
          {formatDate(publishedAt ?? "")}
        </p>
        <MDXContent source={content} />
      </article>
    </section>
  );
}
