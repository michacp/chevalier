import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';
import { ErpComponent } from './erp.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ServiceandcutsComponent } from './views/serviceandcuts/serviceandcuts.component';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { AddclientComponent } from './layout/addclient/addclient.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ClientsService } from './service/clients/clients.service';
import { TokenInterceptorService } from './service/token-interceptor/token-interceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SalesListComponent } from './views/sales-list/sales-list.component';
import { ReportsComponent } from './views/reports/reports.component'; 
import { MatCardModule } from '@angular/material/card';
import { PdfReportComponent } from './layout/pdf-report/pdf-report.component';  
 
@NgModule({
  declarations: [
    ErpComponent,
    TopbarComponent,
    SidebarComponent,
    ServiceandcutsComponent,
    AddclientComponent,
    SalesListComponent,
    ReportsComponent,
    PdfReportComponent
  ],
  imports: [  

    CommonModule,
    ErpRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatOptionModule,
    MatDialogModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule, 
    MatPaginatorModule, 
    MatCardModule,  
     
  ],
  providers: [ClientsService, TokenInterceptorService ],
})
export class ErpModule { }
