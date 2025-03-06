/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://lespurna-official-website.vercel.app', // Change to your actual site URL
    generateRobotsTxt: true, // Generates a robots.txt file
    generateIndexSitemap: false, // Only needed if you have over 7,000 pages
    sitemapSize: 5000, // Reduce sitemap size for better crawling efficiency
    changefreq: 'weekly', // Default: Helps Google know how often content updates
    priority: 0.7, // Default priority for pages
    exclude: [
      '/admin', 
      '/dashboard', 
      '/user-profile',
      '/server-sitemap-index.xml'
    ], // Exclude private routes from sitemap
  
    // Configure specific priority & frequency per route
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://lespurna-official-website.vercel.app'}/server-sitemap.xml`, // If using a dynamic sitemap
    ],
  
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*', // Allow all bots
          allow: '/',
          disallow: ['/admin', '/dashboard', '/user-profile'], // Block private pages
        },
        {
          userAgent: 'Googlebot', // Googlebot-specific rules
          allow: '/',
        },
        {
          userAgent: 'Bingbot', // Bingbot-specific rules
          allow: '/',
        },
      ],
      additionalSitemaps: [
        `${process.env.SITE_URL || 'https://lespurna-official-website.vercel.app'}/sitemap.xml`, // Main Sitemap
      ],
    },
  };