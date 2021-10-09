import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  


  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    console.log("getting weather")
    return this.http.get(`http://localhost:7979/api/weather/${city}`)
  }

 
}
