const {expect, test} = require("@playwright/test");
const { loginPage } = require("../pom/LoginPom.js");

test('TC_01: Successful Login (Standard User)', async ({ page }) => {
    const login = new loginPage(page);
    //await page.goto("https://www.saucedemo.com/");
    //await login.loginWithIncorrectCredentials("invalid_user", "invalid_password");
    await login.navigate();
    await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

})
test('TC_02: Failed Login', async ({ page }) => {
    const login = new loginPage(page);
    await login.navigate();
    //await page.goto("https://www.saucedemo.com/");
    await login.loginWithIncorrectCredentials("invalid_user", "invalid_password");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page.getByText("Username and password do not match any user in this service")).toBeVisible();
})  