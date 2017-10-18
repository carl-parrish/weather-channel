import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  constructor(protected http: Http) {
  }


  /**
   * @function getWeather
   * @return {Observable<any>}
   */
  getWeather(position): Observable<any> {
    //const lat: Number = 33.4249770;
    //const lon: Number = -111.9419140;
    const lat: Number = position.coords.latitude;
    const lon: Number = position.coords.longitude;

    return this.http.get('https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon);
  }
}
