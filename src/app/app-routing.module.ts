import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationServiceComponent } from './registration-service/registration-service.component';
import { LogInServiceComponent } from './log-in-service/log-in-service.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';



const routes: Routes = [
  {path: 'registration-service',component:RegistrationServiceComponent },
  {path: 'log-in-service',component:LogInServiceComponent },
  {path: 'vendor-registration',component:VendorRegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
