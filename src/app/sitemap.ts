// app/sitemap.ts

import type { SitemapEntry, SitemapRoute } from "@/types/user";

const getSortedPostsData: SitemapEntry[] = [
  {
    endpoint: "",
    date: new Date().toISOString(),
    priority: 1.0,
    frequency: "daily",
  },
];

export default async function sitemap(): Promise<SitemapRoute[]> {
  const routes = getSortedPostsData.map(
    ({ endpoint, date, priority, frequency }) => ({
      url: `https://test.com${endpoint}`,
      lastModified: date,
      priority: priority,
      changeFrequency: frequency,
    })
  );

  return [...routes];
}
