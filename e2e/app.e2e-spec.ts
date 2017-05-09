import { Ng2CrudPage } from './app.po';

describe('ng2-crud App', () => {
  let page: Ng2CrudPage;

  beforeEach(() => {
    page = new Ng2CrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
