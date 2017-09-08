import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {}



  getWeather() {
    const lat: Number = 33.4249770;
    const lon: Number = -111.9419140;

    return this.http.get('https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon);
  }
}
