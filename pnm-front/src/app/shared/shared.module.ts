import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    ToggleButtonModule
  ],
  exports:[
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    ToggleButtonModule
  ]
})
export class SharedModule { }