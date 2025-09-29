"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Post = {
  id: number;
  title: { rendered: string };
  link: string;
  excerpt?: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
};

type SitePosts = {
  site: string;
  link: string;
  posts: Post[];
};

type ApiResponse = {
  programacao: SitePosts[];
  economia: SitePosts[];
};

type PostsListProps = {
  category?: "programacao" | "economia"; // opcional para filtrar
};

const colors = {
  primary: "#1E3A8A",
  secondary: "#3B82F6",
  light: "#F9FAFB",
  dark: "#111827",
  accent: "#FBBF24",
};

const PostItem = ({ post, blogLink }: { post: Post; blogLink: string }) => {
  const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  if (!thumbnail || !post.excerpt?.rendered) return null;

  return (
    <div
      className="flex flex-col items-start gap-2 p-3 rounded shadow-sm hover:shadow-md transition-all duration-200 w-72 flex-shrink-0 snap-center"
      style={{ backgroundColor: colors.light }}
    >
      <Image
        src={thumbnail}
        alt={post.title.rendered}
        width={262}
        height={262}
        className="w-full aspect-square rounded object-cover"
      />

      <a
        href={blogLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-bold mb-1 hover:underline"
        style={{ color: colors.secondary }}
      >
        {new URL(blogLink).hostname}
      </a>

      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium post-title group"
        style={{ color: colors.dark }}
      >
        <span
          className="
            relative
            bg-gradient-to-r from-[#3B82F6] to-[#99c0fd]
            dark:from-[#ffcc4c] dark:to-[#FBBF24]
            bg-[length:0%_2px] bg-left-bottom bg-no-repeat
            transition-[background-size] duration-500
            group-hover:bg-[length:100%_2px]
            inline
          "
        >
          {post.title.rendered}
        </span>
      </a>

      <p
        className="text-sm text-gray-600 mt-1 post-text-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </div>
  );
};

const Skeleton = () => (
  <div
    className="flex flex-col items-start gap-2 p-3 rounded shadow-sm animate-pulse w-72 flex-shrink-0 snap-center"
    style={{ backgroundColor: colors.light }}
  >
    <div className="w-full aspect-square bg-gray-300 rounded" />
    <div className="w-full h-4 bg-gray-300 rounded mt-2"></div>
    <div className="w-1/2 h-4 bg-gray-300 rounded mt-1"></div>
    <div className="w-full h-3 bg-gray-200 rounded mt-1"></div>
    <div className="w-full h-3 bg-gray-200 rounded mt-1"></div>
  </div>
);

export default function PostsList({ category }: PostsListProps) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/wordpress-sources");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const renderAllPosts = (sites: SitePosts[]) => {
    const allPosts: { post: Post; blogLink: string }[] = [];
    sites.forEach((site) => {
      site.posts.slice(0, 4).forEach((post) => {
        allPosts.push({ post, blogLink: site.link });
      });
    });

    return (
      <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide">
        {allPosts.map(({ post, blogLink }) => (
          <PostItem key={post.id} post={post} blogLink={blogLink} />
        ))}
      </div>
    );
  };

  const categories: ("programacao" | "economia")[] = category
    ? [category]
    : ["programacao", "economia"];

  if (loading) {
    return (
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat}>
            <h2
              className="text-2xl font-bold my-4"
              style={{ color: colors.primary }}
            >
              {cat === "programacao" ? "Programação" : "Economia"}
            </h2>
            <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {categories.map((cat) => (
        <div key={cat}>
          <h2
            className="text-2xl font-bold my-4"
            style={{ color: colors.primary }}
          >
            {cat === "programacao" ? "Programação" : "Economia"}
          </h2>
          {data?.[cat as keyof ApiResponse] &&
            renderAllPosts(data[cat as keyof ApiResponse]!)}
        </div>
      ))}
    </div>
  );
}
