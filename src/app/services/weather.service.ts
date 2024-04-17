import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( public http: HttpClient) {}

  getWeather(location: string){
    // return this.http.get<any>(`http://api.weatherapi.com/v1/search.json?key=2719f5bd571f45b9af644225241704&q=lond`)
    return this.http.get<any>(`http://api.weatherapi.com/v1/forecast.json?key=2719f5bd571f45b9af644225241704&q=${location}&days=7&lang=es`) 
  }
}
