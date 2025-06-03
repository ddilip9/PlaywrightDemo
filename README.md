# PlaywrightDemo

# 🧪 Playwright E2E Automation Framework – SauceDemo

This project is an end-to-end (E2E) test automation framework built using **Playwright with TypeScript**, following the **Page Object Model (POM)** design pattern.

It automates key scenarios for the [https://www.saucedemo.com](https://www.saucedemo.com) website including:
- Valid login
- Product listing
- Sorting and filtering

---

## 📁 Project Structure

<pre> 📦 playwright-saucedemo ├── 📁 pages # Page Object Models │ ├── LoginPage.ts │ └── ProductsPage.ts ├── 📁 tests # Test Specs │ ├── login.spec.ts │ └── product.spec.ts ├── 📁 utils # Utility Functions (optional) │ └── helpers.ts ├── 📁 .vscode # VS Code Configuration │ └── launch.json ├── playwright.config.ts # Playwright Configuration ├── tsconfig.json # TypeScript Configuration ├── package.json # Project Metadata & Scripts └── README.md # Project Documentation </pre>


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ddilip9/PlaywrightDemo.git
cd playwright-saucedemo

2. Install dependencies
npx playwright install

3. Install Playwright browsers
npx playwright install

✅ Running Tests
Run all tests
npx playwright test

Run specific test file
npx playwright test tests/login.spec.ts

Run tests in headed mode (for debugging)
npx playwright test --headed

🔍 Test Scenarios
✔️ Login Tests
* Valid login with standard_user
* Invalid login
* Locked out user (optional)

🛍️ Product Page Tests
Verify all product names and prices are displayed
Sorting tests:

* Sort by Name (A to Z)
* Sort by Name (Z to A)
* Sort by Price (low to high)
* Sort by Price (high to low)

🧰 Debugging & Reporting
Trace Viewer: Available on failures with --trace on
Screenshots & Videos: Configured for failures (optional)
VS Code Debugging: Launch via .vscode/launch.json

🌐 Cross-Browser Testing
Configure projects in playwright.config.ts to run tests in:
* Chromium (default)
* Firefox
* WebKit (Safari)

projects: [
  { name: 'chromium', use: { browserName: 'chromium' } },
  ...
]

💡 Advanced Features
Page Object Model (POM) for modularity
Auto-waiting and flaky test resilience
Can be extended for:
API + UI hybrid tests
Test data injection
Mocking network requests
