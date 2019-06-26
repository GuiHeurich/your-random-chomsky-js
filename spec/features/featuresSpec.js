// As a big fan of linguistics
// So that I can look at different sentences every day
// I would like to be able to generate random nouns

module.exports = {
  'a user can see a random noun' : function (browser) {
    browser
      .url('localhost:3000')
      .waitForElementVisible('body')
      .assert.containsText('body', 'random')
      .end();
  }
};
