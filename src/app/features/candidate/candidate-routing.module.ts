import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateContainerComponent } from './components/candidate-container/candidate-container.component';

const routes: Routes = [
  {
    path: "",
    component : CandidateContainerComponent,
    data : {
      backgrounded : true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }