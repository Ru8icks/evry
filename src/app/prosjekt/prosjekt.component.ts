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
  enhet:any;
  min = new Date().toISOString().split("T")[0];
  noValid=false;
  
  
  form = new FormGroup({
    tittel: new FormControl(),
    beskrivelse:new FormControl(),
    prosjektstart:new FormControl(),
    
  });

  ngOnInit(): void {
    this.prosjektService.getProsjekts().subscribe(res =>{
      this.projekts=res;
    })
  }

  addItem(newItem: any) {
    this.enhet = newItem
    
    
    console.log(this.enhet, "hereerrer")
    
  }

  save(){
    console.log(this.form.value)
    this.noValid=false;
    if (!this.enhet || this.form.value.tittel===null || this.form.value.prosjektstart===null || this.form.value.beskrivelse===null){
      console.log("return")
      this.noValid=true;
    }
    this.newProsjekt.beskrivelse=this.form.value.beskrivelse;
    this.newProsjekt.tittel=this.form.value.tittel;
    this.newProsjekt.prosjektstart=this.form.value.prosjektstart;
    this.newProsjekt.navn=this.enhet.navn;
    this.newProsjekt.organisasjonsnummer=this.enhet.organisasjonsnummer;
    this.newProsjekt.kode=this.enhet.institusjonellSektorkode?.kode ? this.enhet.institusjonellSektorkode.kode : "NA";
    this.newProsjekt.postadresse=this.enhet.forretningsadresse ? this.enhet.forretningsadresse.adresse : this.enhet.beliggenhetsadresse.adresse;
    console.log(this.newProsjekt, "test")
    
    this.prosjektService.addProsjekt(this.newProsjekt).subscribe(res => {
      console.log("res", res)
    
    });
    
    

    
  }
    
  delete(id: Prosjekt){
    this.prosjektService.deleteProsjekt(id).subscribe(res => {
      console.log("res", res)
    
    });
  }
}
