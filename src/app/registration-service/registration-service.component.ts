import { Component } from '@angular/core';
import { UserDetails } from './../user-details';
import { Response } from './../response';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-service',
  templateUrl: './registration-service.component.html',
  styleUrls: ['./registration-service.component.sass']
})
export class RegistrationServiceComponent {
  constructor(private httpClient:HttpClient){};
 
  url ='https://ynuezfdtla.execute-api.ap-south-1.amazonaws.com/development';
  userData = new UserDetails();
  response = new Response();
//Function called when user clicks on register Button
  submit()
  {
    console.log(this.userData);
    //Calling Post Function Of Lamda
    this.httpClient.post(this.url,this.userData).subscribe(
      res => {
        console.log(res);
        this.response.message=res.toString();
      },
      err =>{
        console.log("Call To Lamda Function Failed");
        this.response.message=err.toString();
      }
    )
  }
  

}
