import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

await scrape({
urls: ['https://b24-2s7w9g.bitrix24.com.br/stream/'],
directory: '/pasta-do-site',
plugins: [
new PuppeteerPlugin({
launchOptions: { headless: false }, /* optional */
scrollToBottom: { timeout: 10000, viewportN: 10 }, /* optional */
blockNavigation: true, /* optional */
})
]
});