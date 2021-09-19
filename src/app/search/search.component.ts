import { Component, OnInit } from '@angular/core';
import { EnhetService } from '../services/enhet.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private enhetService: EnhetService) { }

  
  result: any=null;
  enheter:any =null;
  page:number=0;
  last:number=0;
  form = new FormGroup({
    enhetType: new FormControl('enheter'),
    searchInput:new FormControl(''),
  });
  ngOnInit(): void {
    
  }
 
  getEnhet(){
    console.log("this.getEnhet")
    return this.enhetService.getEnheter(this.form.value.searchInput, this.form.value.enhetType).subscribe(res =>{
      this.result = res;
      console.log(this.result.page.totalPages -1, "HEEEYAAA")
      this.last= this.result.page.totalPages === 0 ?  this.result.page.totalPages : this.result.page.totalPages-1
      this.page=0;
    })
  }
  getNext(){
    console.log("getNext",this.page,this.last)
    if(this.page===this.last){
      console.log("page is last")
      return
    }
    this.page++
    return this.enhetService.getEnheterPage(this.form.value.searchInput, this.page, this.form.value.enhetType ).subscribe(res =>{
      console.log(res)
      this.result = res;
      console.log(this.result._embedded.enheter)
    })
  }
  getPrev(){
    console.log("getPrev")
    if(this.page===0){
      return
    }
    this.page--
    return this.enhetService.getEnheterPage(this.form.value.searchInput, this.page, this.form.value.enhetType).subscribe(res =>{
      console.log(res)
      this.result = res;
      console.log(this.result._embedded.enheter)
    })
  }
  getLast(){
    console.log("get last ",this.last, this.page===this.last)
    if(this.page===this.last){
      return
    }
    
    return this.enhetService.getEnheterPage(this.form.value.searchInput, this.last, this.form.value.enhetType).subscribe(res =>{
      console.log(res)
      this.result = res;
      console.log(this.result._embedded.enheter)
      this.page=this.last
    })
  }
}
