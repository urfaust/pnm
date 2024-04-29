import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkippersComponent } from './skippers/skippers.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SkippersComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkipperRoutingModule { }
