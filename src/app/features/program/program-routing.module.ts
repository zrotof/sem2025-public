import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramContainerComponent } from './components/program-container/program-container.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';

const routes: Routes = [
  {
    path:"",
    component : ProgramContainerComponent,
    data : {
      backgrounded : true
    }
  },
  {
    path: ":theme",
    component: ProgramDetailsComponent,
    data : {
      backgrounded : true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProgramRoutingModule { }
