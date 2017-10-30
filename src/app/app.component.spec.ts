import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ Angular2FontawesomeModule, HttpModule ],
      declarations: [
        AppComponent
      ],
      providers: [
        WeatherService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Carl\'s Angular Weather Project'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Carl\'s Angular Weather Project');
  }));

  it('should toggle showCelsius value', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.toggleValue(false)).toBeTruthy();
  }));
});
