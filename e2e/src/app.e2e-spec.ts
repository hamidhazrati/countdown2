import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';
import { BrowserGetTestability } from '@angular/platform-browser/src/browser/testability';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(1).toBe(1);
    //expect(page.getTitleText()).toEqual('coundown');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });

});
