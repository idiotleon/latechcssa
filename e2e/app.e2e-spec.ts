import { LatechcssaPage } from './app.po';

describe('latechcssa App', function() {
  let page: LatechcssaPage;

  beforeEach(() => {
    page = new LatechcssaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
