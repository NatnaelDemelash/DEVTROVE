import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, BookmarkCheck, Filter } from "lucide-react";
import ArticleCard from "@/components/article-card";
import { DevToArticle } from "@/lib/types";

async function getFeaturedArticles(): Promise<DevToArticle[]> {
  const res = await fetch("https://dev.to/api/articles?per_page=3", {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export default async function HomePage() {
  const articles = await getFeaturedArticles();

  return (
    <div className="space-y-16 mt-10">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Your Developer Reading Hub
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover, save, and explore insightful dev articles from the web.
        </p>
        <Button asChild>
          <Link href="/explore">Start Exploring</Link>
        </Button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 text-center">
        <div className="space-y-2">
          <Sparkles className="mx-auto h-8 w-8 text-primary" />
          <h3 className="font-semibold">Fresh Articles</h3>
          <p className="text-sm text-muted-foreground">
            Curated daily from Dev.to's global dev community.
          </p>
        </div>
        <div className="space-y-2">
          <BookmarkCheck className="mx-auto h-8 w-8 text-primary" />
          <h3 className="font-semibold">Save Your Favorites</h3>
          <p className="text-sm text-muted-foreground">
            Bookmark the gems you want to revisit anytime.
          </p>
        </div>
        <div className="space-y-2">
          <Filter className="mx-auto h-8 w-8 text-primary" />
          <h3 className="font-semibold">Tag-based Filtering</h3>
          <p className="text-sm text-muted-foreground">
            Coming soon: Filter articles by your favorite topics.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-muted-foreground">
          Want to bookmark and organize your own reading list?
        </p>
        <Button className="mt-2 w-[30%] py-6 rounded-full" asChild>
          <Link href="/signin">Sign In</Link>
        </Button>
      </section>
    </div>
  );
}
