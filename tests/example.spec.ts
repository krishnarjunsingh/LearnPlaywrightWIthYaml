import { test, expect } from '@playwright/test';
import ENV from '../utils/env';

test('has title', async ({ page }) => {
  const url = ENV.BASE_URL;
  //const url = process.env.BASE_URL;
  console.log(url);
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
