import { DevToArticle } from "@/lib/types";

export default function ArticleCard({ article }: { article: DevToArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl p-4 hover:shadow-md transition block"
    >
      {article.cover_image && (
        <img
          src={article.cover_image}
          alt={article.title}
          className="rounded-md mb-4 object-cover h-48 w-full"
        />
      )}
      <h2 className="text-xl font-semibold">{article.title}</h2>
      <p className="text-sm text-muted-foreground mt-1">
        {article.description}
      </p>
      <div className="text-xs text-muted-foreground mt-2 flex flex-wrap gap-2">
        {article.tag_list.map((tag) => (
          <span key={tag} className="bg-muted px-2 py-0.5 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <img
          src={article.user.profile_image}
          alt={article.user.name}
          className="h-6 w-6 rounded-full"
        />
        <span className="text-sm">
          {article.user.name} • {article.reading_time_minutes} min read
        </span>
      </div>
    </a>
  );
}
