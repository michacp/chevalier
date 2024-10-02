import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { OurservicesComponent } from './views/ourservices/ourservices.component';
import { ProductsComponent } from './views/products/products.component';
import { TestComponent } from './views/test/test.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './views/terms-of-service/terms-of-service.component';
import { DataDeletionComponent } from './views/data-deletion/data-deletion.component';
import { FeedbackFormComponent } from './views/feedback-form/feedback-form.component';
const routes: Routes = [
  
  {path:'',component:WelcomeComponent },
  {path:'aboutus',component:AboutusComponent  },
  {path:'ourservices',component:OurservicesComponent },
  {path:'products',component:ProductsComponent},
  {path:'test',component:TestComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent },
  {path:'terms-of-service',component:TermsOfServiceComponent },
  {path:'data-deletion',component:DataDeletionComponent },
  {path:'comments',component:FeedbackFormComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
