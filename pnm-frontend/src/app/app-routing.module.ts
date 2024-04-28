import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './layouts/landing/landing.component';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    redirectTo: '/welcome',
    path: '',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: LandingComponent
  },
  {
    path: 'skippers',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./skipper/skipper.module').then(m => m.SkipperModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
