const sitemap = require('sitemap');
const fs = require('fs');

const urls = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    // Add more URLs as needed
];

const sitemapInstance = sitemap.createSitemap({
    hostname: 'https://uhcr.ug',
    urls: urls
});

fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString()); 