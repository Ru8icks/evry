import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProsjektComponent } from './prosjekt/prosjekt.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { WildcardComponent } from './wildcard/wildcard.component';


const routes: Routes = [

  { path: 'search', component: SearchComponent },
  { path: 'prosjekt', component: ProsjektComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', component: IndexComponent },
  { path: '**', component: WildcardComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
