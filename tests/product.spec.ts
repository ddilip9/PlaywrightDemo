import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('SauceDemo - Products Page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should display the Products page title', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.title).toHaveText('Products');
  });

  test('should list multiple products', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const productTitles = await productsPage.getProductTitles();
    expect(productTitles.length).toBeGreaterThan(0);
  });

  test('should add a single product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart('Sauce Labs Backpack');
    const count = await productsPage.getCartItemCount();
    expect(count).toBe(1);
  });

  test('should add multiple products to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.addProductToCart('Sauce Labs Bike Light');
    const count = await productsPage.getCartItemCount();
    expect(count).toBe(2);
  });

  test('should navigate to cart when cart icon is clicked', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.cartButton.click();
    await expect(page).toHaveURL(/.*cart/);
  });
});
