import { Component } from '@angular/core';
import { MathRoundNumberPipe } from 'src/app/pipes/math-round-number.pipe';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [MathRoundNumberPipe],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent {

  loadingData: boolean = true;
  location: string = ''
  weather: any

  constructor(public weatherApi: WeatherService){

    navigator.geolocation.getCurrentPosition((position) => {
      this.getWeather(`${position.coords.latitude},${position.coords.longitude}`)
    }, (err) => {
      this.getWeather('Mexico')
    })
  }

  async getWeather(location: string){
    this.loadingData = true
    await this.weatherApi.getWeather(location).subscribe(data => {
      console.log(data)
      this.weather = data
      this.loadingData = false
    })
  }
}
