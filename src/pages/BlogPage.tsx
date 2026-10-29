import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BLOG_ARTICLES,
  type BlogArticle,
  type BlogContentBlock,
  type BlogInlineLink,
} from '../data/blogArticles.ts';
import { getBlogImage } from '../data/blogImages.ts';

const PRODUCTION_ORIGIN = 'https://rkenggindia.com';

const linkClassName =
  'font-semibold text-blue-800 underline decoration-blue-300 underline-offset-2 hover:text-red-600';

const renderPlainText = (text: string, keyPrefix: string) =>
  text.split(/(https?:\/\/[^\s]+)/g).map((part, index) => {
    if (!/^https?:\/\//.test(part)) return part;
    const url = new URL(part);
    if (url.hostname === 'rkenggindia.com' || url.hostname === 'www.rkenggindia.com') {
      return (
        <a key={`${keyPrefix}-${index}`} href={`${url.pathname}${url.search}${url.hash}`} className={linkClassName}>
          {part}
        </a>
      );
    }
    return (
      <a key={`${keyPrefix}-${index}`} href={part} target="_blank" rel="noreferrer" className={linkClassName}>
        {part}
      </a>
    );
  });

const renderLinkedText = (text: string, links: BlogInlineLink[] = []) => {
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  links.forEach((link, index) => {
    if (link.start < cursor || link.start < 0 || link.end > text.length || link.end <= link.start) return;
    parts.push(...renderPlainText(text.slice(cursor, link.start), `plain-${index}`));
    const url = new URL(link.href, PRODUCTION_ORIGIN);
    const isInternal = url.hostname === 'rkenggindia.com' || url.hostname === 'www.rkenggindia.com';
    parts.push(
      <a
        key={`linked-${index}`}
        href={isInternal ? `${url.pathname}${url.search}${url.hash}` : url.href}
        target={isInternal ? undefined : '_blank'}
        rel={isInternal ? undefined : 'noreferrer'}
        className={linkClassName}
      >
        {text.slice(link.start, link.end)}
      </a>,
    );
    cursor = link.end;
  });
  parts.push(...renderPlainText(text.slice(cursor), 'plain-final'));
  return parts;
};

const extractFaqs = (blocks: BlogContentBlock[]) => {
  const faqs: Array<{ question: string; answer: string }> = [];
  let inFaq = false;
  let question: string | null = null;
  let answerParts: string[] = [];

  const saveFaq = () => {
    if (question && answerParts.length > 0) {
      faqs.push({ question, answer: answerParts.join(' ') });
    }
    question = null;
    answerParts = [];
  };

  blocks.forEach((block) => {
    if (block.type === 'heading' && block.level === 2) {
      if (inFaq) saveFaq();
      inFaq = block.text.trim().toLowerCase() === 'faq';
      return;
    }
    if (!inFaq) return;
    if (block.type === 'heading' && block.level === 3 && /^\d+\.\s/.test(block.text)) {
      saveFaq();
      question = block.text.replace(/^\d+\.\s*/, '');
    } else if (block.type === 'paragraph' && question) {
      answerParts.push(block.text);
    } else if ((block.type === 'ordered-list' || block.type === 'unordered-list') && question) {
      answerParts.push(block.items.join(' '));
    }
  });
  if (inFaq) saveFaq();
  return faqs;
};

const renderArticleBlocks = (article: BlogArticle) =>
  article.blocks.map((block, index) => {
    if (block.type === 'heading') {
      const Heading = block.level === 2 ? 'h2' : 'h3';
      return (
        <Heading
          key={`${index}-${block.text}`}
          className={block.level === 2
            ? 'mb-4 mt-10 text-2xl font-extrabold tracking-tight text-slate-950 first:mt-0 sm:text-3xl'
            : 'mb-2 mt-7 text-lg font-bold tracking-tight text-blue-950 sm:text-xl'}
        >
          {renderLinkedText(block.text, block.links)}
        </Heading>
      );
    }
    if (block.type === 'paragraph') {
      return (
        <p key={`${index}-${block.text}`} className="my-4 text-base leading-7 text-slate-700">
          {renderLinkedText(block.text, block.links)}
        </p>
      );
    }
    if (block.type === 'table') {
      return (
        <div key={`${index}-${block.headers[0]}`} className="my-6 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead className="bg-blue-950 text-white">
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col" className="border border-blue-800 px-4 py-3 font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${index}-${rowIndex}`} className={rowIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`} className="border border-slate-200 px-4 py-3 text-slate-700">
                      {renderPlainText(cell, `table-${index}-${rowIndex}-${cellIndex}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    const List = block.type === 'ordered-list' ? 'ol' : 'ul';
    return (
      <List
        key={`${index}-${block.items[0]}`}
        className={`${block.type === 'ordered-list' ? 'list-decimal' : 'list-disc'} my-4 space-y-2 pl-6 text-base leading-7 text-slate-700 marker:font-semibold marker:text-red-600`}
      >
        {block.items.map((item, itemIndex) => (
          <li key={`${index}-${itemIndex}-${item}`}>
            {renderLinkedText(item, block.links?.[itemIndex])}
          </li>
        ))}
      </List>
    );
  });

export const BlogPage: React.FC = () => (
  <>
    <section className="border-b border-slate-200 bg-blue-950 py-14 text-white sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-300">RK Engineering Knowledge Centre</p>
        <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Engineering &amp; Infrastructure Insights
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
          Articles on cable management, galvanized steel, earthing, solar structures, and procurement for industrial and infrastructure projects.
        </p>
      </div>
    </section>
    <section aria-label="Blog articles" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-center gap-2 text-sm font-semibold text-slate-600">
          <BookOpen aria-hidden="true" className="h-4 w-4 text-red-600" />
          {BLOG_ARTICLES.length} articles
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_ARTICLES.map((article) => {
            const image = getBlogImage(article);
            return (
              <article key={article.id} className="flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none">
                <Link
                  to={article.path}
                  aria-label={`Read ${article.title}`}
                  className="block aspect-video overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-900"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain object-center"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-600">{article.category}</p>
                  <h2 className="mt-3 text-xl font-extrabold leading-tight tracking-tight text-slate-950">
                    {article.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <Link
                    to={article.path}
                    className="mt-6 inline-flex min-h-11 items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm font-bold text-blue-950 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 motion-reduce:transition-none"
                  >
                    Read Article
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export const BlogArticlePage: React.FC<{ article: BlogArticle }> = ({ article }) => {
  const faqs = extractFaqs(article.blocks);
  const image = getBlogImage(article);
  const articleBody = article.blocks
    .map((block) => {
      if (block.type === 'heading' || block.type === 'paragraph') return block.text;
      if (block.type === 'table') {
        return [block.headers.join(' | '), ...block.rows.map((row) => row.join(' | '))].join('\n');
      }
      return block.items.join('\n');
    })
    .join('\n\n');
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: new URL(image.src, PRODUCTION_ORIGIN).href,
    articleBody,
    mainEntityOfPage: `${PRODUCTION_ORIGIN}${article.path}`,
    publisher: {
      '@type': 'Organization',
      name: 'RK Engineering & Galvanizers Pvt. Ltd.',
      url: PRODUCTION_ORIGIN,
    },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
          <li><Link to="/" className="hover:text-blue-900">Home</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
          <li><Link to="/blog" className="hover:text-blue-900">Blog</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
          <li aria-current="page" className="font-semibold text-slate-800">{article.title}</li>
        </ol>
      </nav>

      <article className="bg-white">
        <header className="border-b border-slate-200 bg-slate-50 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 motion-reduce:transition-none">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              All articles
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-red-600">{article.category}</p>
            <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
          </div>
        </header>

        <figure className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <img
            src={image.src}
            alt={image.alt}
            fetchPriority="high"
            className="aspect-video w-full rounded-xl object-cover"
          />
        </figure>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div>
            {renderArticleBlocks(article)}
          </div>
        </div>
      </article>

      <section className="bg-blue-950 py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">RK Engineering &amp; Galvanizers</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Discuss your project requirements</h2>
            <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
              Contact our team to discuss product specifications, project documents, and enquiry requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
          >
            Contact Us
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      {faqs.length > 0 && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </>
  );
};
