import { test, expect } from '@playwright/test';

test('has footer', async ({ page }) => {
  await page.goto('/');

  // Expect page to have footer.
  const footer = await page.locator('footer');
  await expect(footer).toBeVisible();
});

test('footer has telegram link', async ({ page }) => {
 await page.goto('/');

 const footer = await page.locator('footer');
 const telegramLink = await footer.locator('a[href="https://t.me/onlydigitalagency"]').nth(0);
 await expect(telegramLink).toBeVisible();
});

test('footer has email link with mailto action', async ({ page }) => {
 await page.goto('/');

 const footer = await page.locator('footer');
 const mailLink = await footer.getByRole('link', { name: 'hello@only.digital' }).nth(0);
 await expect(mailLink).toBeVisible();
 
 const URL = await mailLink.getAttribute('href');
 await expect(URL).toContain('mailto');
});

