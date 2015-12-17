'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('status updater app', function() {


  // it('should automatically redirect to /index when location hash/fragment is empty', function() {
  //   browser.get('index.html');
  //   expect(browser.getLocationAbsUrl()).toMatch("/index");
  // });


  describe('index', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    describe('status', function () {
      it('update the page after entering in a status', function() {
        element(by.model('status.body')).sendKeys('Madison\'s getting on my nerves.');
        element(by.className('btn-default')).click();
        expect(element.all(by.className('status-body')).first().getText()).
          toMatch('Madison\'s getting on my nerves.');
      });

      it('fail validation if the status is blank', function() {
        element(by.model('status.body')).sendKeys('');
        element(by.className('btn-default')).click();
        expect(element.all(by.className('status-body')).first().getText()).
          toMatch('I\'m done being Secretary of State.');
      });

      it('displays the status list after navigating to the friends tab and back', function () {
        element(by.id('friend-tab-link')).click();
        element(by.id('status-tab-link')).click();
        expect(element.all(by.className('status-body')).first().getText()).
          toMatch('I\'m done being Secretary of State.');
      });
    });

    describe('friends', function() {
      it('displays the friends list when the friends tab is clicked', function () {
        element(by.id('friend-tab-link')).click();
        expect(element(by.tagName('h3')).getText()).toMatch('Your Friends:');
      });
    });


  });

});
