import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Prosjekt } from '../classes/prosjekt';
import { ProsjektService } from '../services/prosjekt.service';


@Component({
  selector: 'app-prosjekt',
  templateUrl: './prosjekt.component.html',
  styleUrls: ['./prosjekt.component.css']
})
export class ProsjektComponent implements OnInit {

  constructor(private prosjektService: ProsjektService) { }

  newProsjekt = new Prosjekt;
  projekts:any;

  form = new FormGroup({
    tittel: new FormControl(''),
    beskrivelse:new FormControl(''),
    prosjektstart:new FormControl(),
  });

  ngOnInit(): void {
    this.prosjektService.getProsjekts().subscribe(res =>{
      console.log("test ma pats", res)
      this.projekts=res;
    })
  }

  save(){
    console.log(this.form.value)
    this.newProsjekt.beskrivelse=this.form.value.beskrivelse;
    this.newProsjekt.tittel=this.form.value.tittel;
    this.newProsjekt.prosjektstart=this.form.value.prosjektstart;
    this.prosjektService.addProsjekt(this.newProsjekt).subscribe(res => {
      console.log("I WANA SLEEP", res)
    
    });
    
    

    
  }
    
  delete(id: Prosjekt){
    this.prosjektService.deleteProsjekt(id).subscribe(res => {
      console.log("I WANA SLEEP", res)
    
    });
  }
}
