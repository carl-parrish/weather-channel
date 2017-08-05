import { WeatherChannelPage } from './app.po';

describe('weather-channel App', () => {
  let page: WeatherChannelPage;

  beforeEach(() => {
    page = new WeatherChannelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
