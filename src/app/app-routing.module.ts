import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailslistesComponent } from './detailslistes/detailslistes.component';
import { DetailstiragesComponent } from './detailstirages/detailstirages.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
  {
    path:"accueil",
    component:AccueilComponent
  },
  {
    path:"",
    redirectTo:"accueil",
    pathMatch:'full'
  },
  {
    path:"tirage",
    component:TirageComponent
  },
  {
    path:"detailtirage",
    component:DetailstiragesComponent
  },
  {
    path:"detailslistes",
    component:DetailslistesComponent
  },
  
  {
    path:"dasboard",
    component:DashboardComponent
    

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
