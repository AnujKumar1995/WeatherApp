import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {RootObject} from '../interface/iweather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  show: boolean = false;
  _city: string;
  date: string;
  cityName: string;
  country: string;
  pressure: number;
  temper: number;
  temper1: number;
  temper2: number;
  temper3: number;
  temper4: number;
  desc: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  tempHigh: number;
  tempLow: number;
  tempHigh1: number;
  tempLow1: number;
  tempHigh2: number;
  tempLow2: number;
  tempHigh3: number;
  tempLow3: number;
  tempHigh4: number;
  tempLow4: number;
  huminity: number;
  wind: number;
  huminity1: number;
  wind1: number;
  huminity2: number;
  wind2: number;
  huminity3: number;
  wind3: number;
  huminity4: number;
  wind4: number;
  icon: string;
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  date1: string;
  date2: string;
  date3: string;
  date4: string;
  degree: number;
  degree1: number;
  degree2: number;
  degree3: number;
  degree4: number;
  constructor(private data: DataService) { }

  ngOnInit() { }
  getInfo() {
    this.data.getDetails(this._city).subscribe((d: RootObject) => {
      this.show = true;
      this.cityName = d.city.name;
      this.country = d.city.country;
      this.pressure = d.list[0].main.pressure;

      this.date = d.list[0].dt_txt;
      
      this.date1 = d.list[4].dt_txt;
      this.date2 = d.list[11].dt_txt;
      this.date3 = d.list[20].dt_txt;
      this.date4 = d.list[30].dt_txt;

      this.desc = d.list[0].weather[0].description;
      this.desc1 = d.list[4].weather[0].description;
      this.desc2 = d.list[10].weather[0].description;
      this.desc3 = d.list[20].weather[0].description;
      this.desc3 = d.list[30].weather[0].description;
      this.temper = Math.round(d.list[0].main.temp - 273.15);
     
      this.tempHigh = Math.round(d.list[0].main.temp_max - 273.15);
      this.tempLow = Math.round(d.list[0].main.temp_min - 273.15);

      this.tempHigh1 = Math.round(d.list[4].main.temp_max - 273.15);
      this.tempLow1 = Math.round(d.list[4].main.temp_min - 273.15);

      this.tempHigh2 = Math.round(d.list[10].main.temp_max - 273.15);
      this.tempLow2 = Math.round(d.list[10].main.temp_min - 273.15);

      
      this.tempHigh3 = Math.round(d.list[20].main.temp_max - 273.15);
      this.tempLow3 = Math.round(d.list[20].main.temp_min - 273.15);

      this.tempHigh4 = Math.round(d.list[20].main.temp_max - 273.15);
      this.tempLow4 = Math.round(d.list[20].main.temp_min - 273.15);

      this.huminity = d.list[0].main.humidity;
      this.wind = d.list[0].wind.speed;
      this.degree = d.list[0].wind.deg;

      this.huminity1 = d.list[4].main.humidity;
      this.wind1 = d.list[4].wind.speed;
      this.degree1 = d.list[4].wind.deg;

      this.huminity2 = d.list[10].main.humidity;
      this.wind2 = d.list[10].wind.speed;
      this.degree2 = d.list[10].wind.deg;

      this.huminity3 = d.list[20].main.humidity;
      this.wind3 = d.list[20].wind.speed;
      this.degree3 = d.list[20].wind.deg;

      this.huminity4 = d.list[30].main.humidity;
      this.wind4 = d.list[30].wind.speed;
      this.degree4 = d.list[30].wind.deg;


      this.icon = `http://openweathermap.org/img/w/${d.list[0].weather[0].icon}.png`;
      this.icon1 = `http://openweathermap.org/img/w/${d.list[4].weather[0].icon}.png`;
      this.icon2 = `http://openweathermap.org/img/w/${d.list[10].weather[0].icon}.png`;
      this.icon3 = `http://openweathermap.org/img/w/${d.list[20].weather[0].icon}.png`;
      this.icon4 = `http://openweathermap.org/img/w/${d.list[30].weather[0].icon}.png`;
      
      this._city = '';
    },
      (error) => {
        alert("No City Found")
        this.show = false;
        this._city= '';
       
      }       
    );
    
  
  }
}

