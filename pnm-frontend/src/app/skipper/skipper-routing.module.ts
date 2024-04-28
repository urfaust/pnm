import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkippersComponent } from './skippers/skippers.component';

const routes: Routes = [
  {
    path: '',
    component: SkippersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkipperRoutingModule { }
