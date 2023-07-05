import { playAudit } from 'playwright-lighthouse';
import { test, chromium } from '@playwright/test';
import { thresholds } from './threshold';
// import { URLs } from './urls.json'

const options = {
    loglevel: "info",
}
const URLs =[{
        url:"https://uat.shriramfinance.in/"
    },
    {
        url:"https://uat.shriramfinance.in/"
      
    }]

URLs.forEach((data,idx) => {
    test('Ligthouse performance test for '+(idx), async ({}) => {
        const browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'],
            headless: false
        });
        const page = await browser.newPage();
        await page.goto(data.url);
        await playAudit({
            page: page,
            thresholds: thresholds,
            port: 9222,
            opts: options,
            reports: {
                formats: {
                    html: true, //defaults to false
                },
                name:"lighthouse-report",
                directory:"lighthouse-report"+Date.now().toString()
            },
        });
        await page.close();
        await browser.close();
    })
});