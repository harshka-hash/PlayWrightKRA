const {expect, test} = require("@playwright/test");
const { loginPage } = require("../pom/LoginPom.js");
const { Footer } = require("../pom/Footer.js");

test.describe("Footer Functionality", () => {
    test('TC_11: Verify Footer Links', async ({ page, context }) => {
        const login = new loginPage(page);
        await login.navigate();
        await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
        const footer = new Footer(page, page.url().toString());
        footer.verifyFooterText();
        const [facebookPage] = await Promise.all([
            context.waitForEvent('page'),
            footer.facebookLink.click()
        ]);
        await expect(facebookPage).toHaveURL("https://www.facebook.com/saucelabs");
        await facebookPage.close();
        
        //console.log(page.url());
        /*
        const [linkedinPage] = await Promise.all([
            context.waitForEvent('page'),
            footer.linkedinLink.click()
        ]);
        await expect(linkedinPage).toHaveURL("https://www.linkedin.com/company/sauce-labs/");
        await linkedinPage.close(); 
        
        const [twitterPage] = await Promise.all([
            context.waitForEvent('page'),
            footer.twitterLink.click()
        ]);
        
        await expect(twitterPage).toHaveURL("https://twitter.com/saucelabs");
        await twitterPage.close();
        */
    });

});


