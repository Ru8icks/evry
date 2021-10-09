import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EnhetService } from './services/enhet.service';
import { WildcardComponent } from './wildcard/wildcard.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProsjektComponent } from './prosjekt/prosjekt.component';
import { WeatherComponent } from './weather/weather.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WildcardComponent,
    SearchResultsComponent,
    ProsjektComponent,
    IndexComponent,
    WeatherComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EnhetService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
