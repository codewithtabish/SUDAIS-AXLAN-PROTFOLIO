/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://sudaisazlan.pro';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: [],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async (config) => {
    const fetch = (await import('node-fetch')).default;

    // Fetch Strapi data
    const blogRes = await fetch('https://sudais-axlan-strapi-backend.onrender.com/api/blogs?populate=*');
    const projectRes = await fetch('https://sudais-axlan-strapi-backend.onrender.com/api/projects?populate=*');

    const blogsJson = await blogRes.json();
    const projectsJson = await projectRes.json();

    // Static base pages
    const staticPaths = [
      { loc: '/', lastmod: new Date().toISOString() },
      { loc: '/blogs', lastmod: new Date().toISOString() },
      { loc: '/projects', lastmod: new Date().toISOString() },
    ];

    // Dynamic blog slugs
    const blogPaths = blogsJson.data.map((item) => ({
      loc: `/blogs/${item.slug}`,
      lastmod: item.updatedAt || new Date().toISOString(),
    }));

    // Dynamic project slugs
    const projectPaths = projectsJson.data.map((item) => ({
      loc: `/projects/${item.slug}`,
      lastmod: item.updatedAt || new Date().toISOString(),
    }));

    return [...staticPaths, ...blogPaths, ...projectPaths];
  },
};
