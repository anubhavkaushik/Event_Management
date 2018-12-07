import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LogInServiceComponent } from './log-in-service/log-in-service.component';
import { RegistrationServiceComponent } from './registration-service/registration-service.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInServiceComponent,
    RegistrationServiceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
