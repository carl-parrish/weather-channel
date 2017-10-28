import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import {TemperaturePipe} from './temperature.pipe';


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
            this.tempInCelsius = new TemperaturePipe().transform(main.temp, 'C');
            //this.tempInFahrenheit = new TemperaturePipe().transform(this.celsius2Fahrenheit(main.temp), 'F');
            this.tempInFahrenheit = new TemperaturePipe().transform(this.celsius2Fahrenheit(105), 'F');
          });
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
   * @function toggleValue
   * @description - Return the compliment of the current value
   * param (boolean) showCelsius
   * return boolean
   */
  public toggleValue(showCelsius: boolean): boolean {
    return !showCelsius;
  }
}
