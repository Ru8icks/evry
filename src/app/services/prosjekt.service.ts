import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prosjekt } from '../classes/prosjekt';

@Injectable({
  providedIn: 'root'
})
export class ProsjektService {

  constructor(private http: HttpClient) { }

  addProsjekt(prosjekt: Prosjekt) {
    console.log("FMLS")
    return this.http.post<Prosjekt>(`http://localhost:7979/api/prosjekt`, prosjekt);
  }
  getProsjekts() {
    console.log("FMLS")
    return this.http.get<Prosjekt>(`http://localhost:7979/api/prosjekt`);
  }
  deleteProsjekt(prosjekt:Prosjekt){
    console.log("id",prosjekt._id)
    return this.http.delete<Prosjekt>(`http://localhost:7979/api/prosjekt/${prosjekt._id}`);
  }
  
}
