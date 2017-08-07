import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http){}
  getWeather(lat: number, lon: number){
    return this.http.get('https://fcc-weather-api.glitch.me/api/current?lat=' + lat +'&lon=' + lon);
  }
}
