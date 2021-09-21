import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnhetService {

  constructor(private http: HttpClient) { }
  

  getEnheter(name: string, enhetType:string  ) {
    return this.http.get(`http://localhost:7979/api/enhet/${name}/${enhetType}` )
  }
  getEnheterPage(name: string, page: number, enhetType:string ) {
    return this.http.get(`http://localhost:7979/api/enhet/${name}/${page}/${enhetType}` )
  }

}
