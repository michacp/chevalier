import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { OurservicesComponent } from './views/ourservices/ourservices.component';
import { ProductsComponent } from './views/products/products.component';
import { TestComponent } from './views/test/test.component';
const routes: Routes = [
  {path:'',component:WelcomeComponent },
  {path:'aboutus',component:AboutusComponent  },
  {path:'ourservices',component:OurservicesComponent },
  {path:'products',component:ProductsComponent},
  {path:'test',component:TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
