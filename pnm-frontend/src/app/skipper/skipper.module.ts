import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SkipperRoutingModule } from './skipper-routing.module';
import { SkippersComponent } from './skippers/skippers.component';


@NgModule({
  declarations: [
    SkippersComponent
  ],
  imports: [
    CommonModule,
    SkipperRoutingModule,
    SharedModule
  ]
})
export class SkipperModule { }
