import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }
  
  getDetails(_city: string) 
  { 
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${_city}&APPID=89ba401b5cd71598fcd7dd7060182730`)
  }
}
