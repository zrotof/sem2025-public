import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampainAmbassadorContainerComponent } from './compoments/campain-ambassador-container/campain-ambassador-container.component';

const routes: Routes = [
  {
    path:"",
    component : CampainAmbassadorContainerComponent,
    data : {
      backgrounded : true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampainAmbassadorRoutingModule { }
