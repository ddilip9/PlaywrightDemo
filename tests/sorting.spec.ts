import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Sorting and Price Filtering', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should sort products A to Z', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('az');
    const titles = await productsPage.getProductTitles();
    const sorted = [...titles].sort((a, b) => a.localeCompare(b));
    expect(titles).toEqual(sorted);
  });

  test('should sort products Z to A', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('za');
    const titles = await productsPage.getProductTitles();
    const sorted = [...titles].sort((a, b) => b.localeCompare(a));
    expect(titles).toEqual(sorted);
  });

  test('should sort products by price low to high', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('lohi');
    const prices = await productsPage.getProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test('should sort products by price high to low', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('hilo');
    const prices = await productsPage.getProductPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });
});
