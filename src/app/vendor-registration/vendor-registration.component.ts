import { Component, OnInit } from '@angular/core';
import {vendorDetails} from './vendor-Registration-Details'
import {vendorRegisterResponse} from './response';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.sass']
})
export class VendorRegistrationComponent{

  constructor(private httpClient:HttpClient){};

 
  apiGatewayURL = 'https://mklnl3dc50.execute-api.ap-south-1.amazonaws.com/Dev';
  vendorObj = new vendorDetails();
  response = new vendorRegisterResponse();
  public bussinessTypeOptions = ['Wedding Photography','Wedding Revenue', 'DJ','Mehendi','Decors','Caterers'] 
  public cityList = ['Delhi','Mumbai','Pune','Kolkata','Gurgaon','Chennai'];
  ngOnInit() {
  }


  

  submit()
  {
    console.log(this.vendorObj);
    //Calling Post Function Of Lamda
    this.httpClient.post(this.apiGatewayURL,this.vendorObj).subscribe(
      res => {
        console.log(res);
        this.response.registerationMessage=res.toString();
      },
      err =>{
        console.log("Call To Lamda Function Failed");
        this.response.registerationMessage=err.toString();
      }
    )
  }

}
