import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work', () => {
  test('navigate to EPAM and verify Client Work page', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    // Click Services in header
    await page.getByRole('link', { name: /Services/i }).click();
    // Click the "Explore Our Client Work" link
    await page.getByRole('link', { name: /Explore Our Client Work/i }).click();
    // Verify "Client Work" is visible
    await expect(page.getByText(/Client Work/i)).toBeVisible();
  });
});
