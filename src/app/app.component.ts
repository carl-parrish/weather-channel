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
      navigator.geolocation.getCurrentPosition((position) => {
        this.weatherService.getWeather(position).subscribe(
          res => {
            const weather = JSON.parse(res._body).weather[0];
            const main = JSON.parse(res._body).main;
            this.description = weather.description;
            this.icon = weather.icon;
            this.temp = main.temp;
          }
        );
      });
    }
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
    console.log('Before setting: ' + this.inCelsius);
    this.inCelsius = !(this.inCelsius);
    console.log('After setting: ' + this.inCelsius);
  }
}
