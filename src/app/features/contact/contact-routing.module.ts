import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactContainerComponent } from './components/contact-container/contact-container.component';

const routes: Routes = [
  {
    path:"",
    component : ContactContainerComponent,
    data : {
      backgrounded : true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
