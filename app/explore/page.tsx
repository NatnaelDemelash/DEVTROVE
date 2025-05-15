import ArticleCard from "@/components/article-card";
import { DevToArticle } from "@/lib/types";
import React from "react";

async function getArticles(): Promise<DevToArticle[]> {
  const res = await fetch("https://dev.to/api/articles?per_page=20", {
    next: { revalidate: 3600 }, //cache for 1 hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
}

export default async function ExplorePage() {
  const articles = await getArticles();

  return (
    <div className="mt-6 space-y-4">
      <h1 className="text-3xl font-bold">Explore Developer Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
