import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();
	return rss({
		title: "Alex Stoyanov",
		description: "Personal website and blog of Alex Stoyanov.",
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id}`,
		})),
	});
}
