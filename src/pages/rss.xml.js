import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { company } from '../data/company';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${company.name} — Blog`,
    description:
      'Honest guides on concrete, pavers, patios, retaining walls and outdoor living costs, comparisons and problems in Knoxville & East Tennessee.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
