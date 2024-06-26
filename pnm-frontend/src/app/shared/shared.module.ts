import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    TableModule,
    ImageModule,
  ],
  exports:[
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    TableModule,
    ImageModule,
  ]
})
export class SharedModule { }