import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaContainerComponent } from './components/agenda-container/agenda-container.component';

const routes: Routes = [
  {
    path:"",
    component : AgendaContainerComponent,
    data : {
      backgrounded : true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
