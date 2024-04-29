import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SkipperRoutingModule } from './skipper-routing.module';
import { SkippersComponent } from './skippers/skippers.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    SkippersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SkipperRoutingModule,
    SharedModule
  ]
})
export class SkipperModule { }
