import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'Carl\'s Angular Weather Project';
  public description = '';
  public icon = '';
  public tempInCelsius: number;
  public tempInFahrenheit: number;
  public showCelsius = false;

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
            this.tempInCelsius = main.temp;
            //this.tempInFahrenheit = this.celsius2Fahrenheit(this.tempInCelsius);
            this.tempInFahrenheit = 24;
          }
        );
      });
    }
  }


  /**
   * @function celsius2Fahrenheit
   * @return (Number)
   */
  public celsius2Fahrenheit(temp: number): number {
    return temp * (9 / 5) + 32;
  }

  /**
   * @function toggleCelsius
   * return boolean
   */
  public toggleCelsius(): boolean {
    return !this.showCelsius;
  }
}
