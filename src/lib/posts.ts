import fs from "fs";
import matter from "gray-matter";
import path from "path";

const rootDirectory = path.join(process.cwd(), "src", "content", "posts");

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  description?: string;
  image?: string;
  publishedAt?: string;
  published?: boolean;
  slug: string;
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = await fs.readFileSync(filePath, { encoding: "utf-8" });

    const { data, content } = matter(fileContent);

    return {
      metadata: { ...data, slug },
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
};

export const getPosts = async (limit?: number): Promise<PostMetadata[]> => {
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .map((file) => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    })
    .filter((post) => post.published);

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
};
const getPostMetadata = (filepath: string): PostMetadata => {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

  const { data } = matter(fileContent);

  return { ...data, slug };
};
