import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
// import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    // ToggleButtonModule,
    TableModule
  ],
  exports:[
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    // ToggleButtonModule,
    TableModule
  ]
})
export class SharedModule { }