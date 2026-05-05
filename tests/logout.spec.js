const {expect, test} = require("@playwright/test");
const { loginPage } = require("../pom/LoginPom.js");
const { Logout } = require("../pom/Logout.js");

test('TC_10: Logout Functionality', async ({ page }) => {
    const login = new loginPage(page);
    await login.navigate();
    await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
    const logout = new Logout(page,page.url().toString());
    await logout.logout();
});