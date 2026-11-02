import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { site } from '../data/site';

export async function GET(context) {
  const posts = site.blog ? await getCollection('blog', ({ data }) => !data.draft) : [];
  return rss({
    title: `${site.name} · Blog`,
    description: site.tagline,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
