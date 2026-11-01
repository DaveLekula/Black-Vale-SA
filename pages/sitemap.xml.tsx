import { GetServerSideProps } from 'next';
import { solutions } from '../data/solutions';
import { insights } from '../data/insights';

const BASE = 'https://blackvalesa.com';

function Sitemap() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticRoutes = ['', '/solutions', '/about', '/contact', '/insights', '/privacy', '/terms'];
  const solutionRoutes = solutions.map(s => `/solutions/${s.slug}`);
  const insightRoutes = insights.map(i => `/insights/${i.slug}`);
  const allRoutes = [...staticRoutes, ...solutionRoutes, ...insightRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${BASE}${r}</loc>
    <changefreq>monthly</changefreq>
    <priority>${r === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return { props: {} };
};

export default Sitemap;
