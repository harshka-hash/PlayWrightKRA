const {expect,test} = require("@playwright/test");

class Footer{
    constructor(page,url){
        this.page = page;
        this.url = url;
        this.twitterLink = page.locator(".social_twitter");
        this.facebookLink = page.locator(".social_facebook");
        this.linkedinLink = page.locator(".social_linkedin");
    }
    async verifyTwitterLink(){
        await this.twitterLink.click();
        expect(this.page).toHaveURL("https://twitter.com/saucelabs");
    }
    async verifyFacebookLink(){
        await this.facebookLink.click();
        expect(this.page).toHaveURL("https://www.facebook.com/saucelabs");
    }
    async verifyLinkedinLink(){
        await this.linkedinLink.click();
        expect(this.page).toHaveURL("https://www.linkedin.com/company/sauce-labs/");
    }
    async verifyFooterText(){
        await expect(this.page.locator(".footer_copy")).toHaveText("© 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy");
    }
}
module.exports = {Footer};