# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: footer.spec.js >> Footer Functionality >> TC_11: Verify Footer Links
- Location: tests/footer.spec.js:6:5

# Error details

```
Error: page.waitForLoadState: Test ended.
```

# Test source

```ts
  1  | const {expect,test} = require("@playwright/test");
  2  | 
  3  | class Footer{
  4  |     constructor(page,url){
  5  |         this.page = page;
  6  |         this.url = url;
  7  |         this.twitterLink = page.locator(".social_twitter");
  8  |         this.facebookLink = page.locator(".social_facebook");
  9  |         this.linkedinLink = page.locator(".social_linkedin");
  10 |     }
  11 |     async verifyTwitterLink(){
  12 |         await this.twitterLink.click();
  13 |         expect(this.page).toHaveURL("https://twitter.com/saucelabs");
  14 |     }
  15 |     async verifyFacebookLink(){
  16 |         await this.facebookLink.click();
  17 |         expect(this.page).toHaveURL("https://www.facebook.com/saucelabs");
  18 |     }
  19 |     async verifyLinkedinLink(){
  20 |         await this.linkedinLink.click();
  21 |         expect(this.page).toHaveURL("https://www.linkedin.com/company/sauce-labs/");
  22 |     }
  23 |     async verifyFooterText(){
> 24 |         await this.page.waitForLoadState("networkidle");
     |                         ^ Error: page.waitForLoadState: Test ended.
  25 |         await expect(this.page.locator(".footer_copy")).toHaveText("© 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy",{timeout: 10000});
  26 |     }
  27 | }
  28 | module.exports = {Footer};
```