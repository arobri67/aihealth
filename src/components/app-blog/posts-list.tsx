import Image from "next/image";
import Link from "next/link";

import { env } from "@/env/client";
import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "../ui";

const PostsList = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
          <Card className="transition-shadow duration-300 hover:shadow-lg">
            <CardHeader>
              {post.image && (
                <Image
                  src={`${env.NEXT_PUBLIC_BLOG_IMAGE}${post.image}`}
                  alt={post.title || "Blog post image"}
                  width={400}
                  height={200}
                  className="h-48 w-full rounded-t-lg object-cover"
                />
              )}
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 text-lg">
                {post.title || "Untitled Post"}
              </CardTitle>
              {post.description && (
                <p className="line-clamp-4 text-muted-foreground">
                  {post.description}
                </p>
              )}
              {post.publishedAt && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Published on {formatDate(post.publishedAt)}
                </p>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
