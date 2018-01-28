module.exports = {
  'clicking button should show text': (browser) => {
    browser
      .url(browser.launch_url + '/index.html')
      .waitForElementVisible('#btn', 500)
      .click('#btn')
      .pause(100)
      .assert.containsText('#heading', 'Hello World!')
      .end();
  },
};
