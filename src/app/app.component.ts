import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'Weather Project';
  public description: string = '';
  public icon: string = '';
  public temp;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  /**
   * @function getWeather
   * @return (void)
   */
  public getWeather(): void {
    this.weatherService.getWeather().subscribe(
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
   * @function celsius2Fahrenheit(
   * return (Number)
   */
  public celsius2Fahrenheit(): number {
    return this.temp * (9 / 5) + 32;
  }
}
