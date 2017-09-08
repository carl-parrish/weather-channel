import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title  = 'Weather Project';
  public description: string;

  constructor(private weatherService: WeatherService){}
  ngOnInit() {
    this.getWeather();
  }

  public getWeather() {
    this.weatherService.getWeather().subscribe(
      res => {
        this.description = JSON.parse(res._body).weather[1].description;
        console.log('Got response: ' + res._body);
      },
      error => console.error('Error: ' + error)
  );
  }

}
