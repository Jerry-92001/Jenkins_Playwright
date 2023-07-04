import { playAudit } from 'playwright-lighthouse'
import { test,chromium } from '@playwright/test';

test('audit example', async({playwright}) => {

    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context=await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://shriramfinance.in/');

    await playAudit({
      thresholds:{
        performance:50,
        accessibility:50,
        'best-practices':50,
        seo:50,
        pwa:50,
      },
      ignoreError:true,
      page: page,
      port: 9222,
      reports:{
        "formats":{html:true,csv:true,json:false},
        name:"lighthouse-report",
        directory:"lighthouse-report"+Date.now().toString()
      }
    });
    await browser.close();
    await page.close();
    await context.close();

});