import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationServiceComponent } from './registration-service/registration-service.component';
import { LogInServiceComponent } from './log-in-service/log-in-service.component';


const routes: Routes = [
  {path: 'registration-service',component:RegistrationServiceComponent },
  {path: 'log-in-service',component:LogInServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
