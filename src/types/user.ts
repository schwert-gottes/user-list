export interface User {
  id: number;
  name: string;
  job: string;
  description: string;
  image: string;
}

export interface UserCardProps {
  name: string;
  job: string;
  description: string;
  image: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

type SitemapFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SitemapEntry {
  endpoint: string;
  date: string;
  priority: number;
  frequency: SitemapFrequency;
}

export interface SitemapRoute {
  url: string;
  lastModified: string;
  priority: number;
  changeFrequency: SitemapFrequency;
}
