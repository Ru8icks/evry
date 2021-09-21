import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit  {

  @Input() result :any;
  showMore: boolean = false;
  
  
  constructor() {}

  ngOnInit(): void {
   
  }
  toggleShowMore(){
    this.showMore=!this.showMore
    console.log(this.showMore)
  }

}
