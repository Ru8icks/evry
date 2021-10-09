import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  isHot: boolean = false;
  isWarm: boolean = false;

  constructor(private weatherService: WeatherService) { }
  city = "Trondheim";
  weather: any = null;
  isSun:  boolean = false;
  isSnow:  boolean = false;
  isCold:  boolean = false;
  isDay:  boolean = false;
  isRain:  boolean = false;
  isThunder:  boolean = false;
  isClouds:  boolean = false;
 
  
  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    return this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.weather = data;
      console.log(data)
      this.isHot = data.main.temp-273.15 > 20;
      this.isWarm =data.main.temp-273.15 < 20 && data.main.temp-273.15 > 0;
      this.isCold = data.main.temp-273.15 < 0;
      console.log(data.weather[0].id, "mamam")
      if (data.weather[0].icon.slice(-1) === 'd'){
        this.isDay=true;
      }
      if (data.weather[0].id > 800 && data.weather[0].id < 805){
        this.isClouds=true;
      }
      if ((data.weather[0].id >= 500 && data.weather[0].id < 505 ||
        data.weather[0].id >= 800 && data.weather[0].id < 802) && this.isDay){
          this.isSun=true;
      }
      if ( data.weather[0].id >= 600 && data.weather[0].id < 622)
      {
          this.isSnow = true;
      }
      if (data.weather[0].Id >= 200 &&data.weather[0].Id < 233){
        this.isThunder = true;
    
      }
      
      if(data.weather[0].id >= 500 && data.weather[0].id < 532){
        this.isRain = true;
      }
      

      console.log(this)

   
    });
  }
}
