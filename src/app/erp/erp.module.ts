import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';
import { ErpComponent } from './erp.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ErpComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ErpRoutingModule
  ]
})
export class ErpModule { }
