// Last updated: 2026-02-05 01:35:00
// RSS feed for blog posts
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");

  // Sort by date, newest first
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: "ModBetter",
    description:
      "Shipping container conversion guides - garages, offices, coffee shops, and more.",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.data.slug}/`,
    })),
  });
}
