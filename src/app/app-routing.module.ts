import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
const routes: Routes = [
  {path:'',component:WelcomeComponent },
  {path:'aboutus',component:AboutusComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
