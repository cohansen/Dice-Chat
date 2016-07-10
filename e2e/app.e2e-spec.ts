import { DICECHATPage } from './app.po';

describe('dice-chat App', function() {
  let page: DICECHATPage;

  beforeEach(() => {
    page = new DICECHATPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
