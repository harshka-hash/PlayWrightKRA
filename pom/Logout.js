const {expect,test} = require("@playwright/test");

class Logout{
    constructor(page,url){
        this.page = page;
        this.url = url;
        this.menuButton = page.locator("#react-burger-menu-btn");
        this.logoutButton = page.locator("#logout_sidebar_link");
    }
    async logout(){
        await this.menuButton.click();
        await this.logoutButton.click();
        expect(this.page).toHaveURL("https://www.saucedemo.com/");
    }
}
module.exports = {Logout};