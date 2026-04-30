const {expect,test} = require("@playwright/test");

class loginPage{
    constructor(page){
        this.page = page;
        this.url = "https://www.saucedemo.com/";
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }
    async navigate(){
        await this.page.goto(this.url);
    }
    async loginWithCorrectCredentials(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async loginWithIncorrectCredentials(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        //await expect(this.page.(".error-message")).toBeVisible();

    }
}

module.exports = {loginPage};
