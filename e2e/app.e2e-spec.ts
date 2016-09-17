import { PortfolioSpaPage } from './app.po';

describe('portfolio-spa App', function() {
  let page: PortfolioSpaPage;

  beforeEach(() => {
    page = new PortfolioSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
