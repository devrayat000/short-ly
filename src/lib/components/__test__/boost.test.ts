import { test, expect } from '@playwright/test';

test.describe('Testing Link booster component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should have a title', async ({ page }) => {
		const title = page.locator('h2#boost-title');
		await expect(title).toHaveText('Boost your links today');
	});
});
