import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErpComponent } from './erp.component';
import { authGuard } from '../guards/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
const routes: Routes = [{ path: '', component: ErpComponent,
  canActivate: [authGuard], // Proteger todas las rutas del ERP
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirige a 'dashboard'
    { path: 'dashboard', component: DashboardComponent },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
