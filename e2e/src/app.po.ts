import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('hannes-root h2')).getText() as Promise<string>;
  }
  goToBooks() {
    // return browser.get(browser.baseUrl + '/books');
    return element(by.css('hannes-top-nav #books')).click();
  }
  getElements() {
    return element(by.css('hannes-preview'));
  }
}
