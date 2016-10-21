import { DocumentaryFilterPage } from './app.po';

describe('documentary-filter App', function() {
  let page: DocumentaryFilterPage;

  beforeEach(() => {
    page = new DocumentaryFilterPage();
  });

  it('should display message saying Hello Movies.', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello Movies.');
  });
});
