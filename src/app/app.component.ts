import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'Carl\'s Weather Project';
  public description = '';
  public icon = '';
  public temp: number;
  public inCelsius = false;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(this.getWeather);
    }
    //this.getWeather();
  }

  /**
   * @function getWeather
   * @return (void)
   */
  public getWeather(position): void {
    this.weatherService.getWeather(position).subscribe(
      res => {
        const weather = JSON.parse(res._body).weather[0];
        const main = JSON.parse(res._body).main;
        this.description = weather.description;
        this.icon = weather.icon;
        this.temp = main.temp;
      },
      error => console.error('Error: ' + error)
    );
  }

  /**
   * @function celsius2Fahrenheit
   * @return (Number)
   */
  public celsius2Fahrenheit(): number {
    return this.temp * (9 / 5) + 32;
  }

  /**
   * @function toggleCelsius
   * return void
   */
  public toggleCelsius(): void {
    this.inCelsius = !this.inCelsius;
  }
}
