import type { BlogArticle } from './blogArticles.ts';

const blogImageUrls = import.meta.glob<string>('../assets/images/b*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const getBlogImage = (article: Pick<BlogArticle, 'id' | 'title'>) => {
  const blogNumber = Number(article.id.replace('blog-', ''));
  const imagePath = `../assets/images/b${blogNumber}.jpeg`;
  const src = blogImageUrls[imagePath];

  if (!Number.isInteger(blogNumber) || !src) {
    throw new Error(`Missing blog image for ${article.id}: ${imagePath}`);
  }

  return {
    src,
    alt: `${article.title} - RK Engineering blog`,
  };
};
