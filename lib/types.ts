export type DevToArticle = {
  id: number;
  title: string;
  url: string;
  published_at: string;
  description: string;
  cover_image: string | null;
  tag_list: string[];
  reading_time_minutes: number;
  user: {
    name: string;
    profile_image: string;
  };
};
