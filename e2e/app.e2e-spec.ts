import { TomSolutionsPage } from './app.po';

describe('tom-solutions App', function() {
  let page: TomSolutionsPage;

  beforeEach(() => {
    page = new TomSolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
