import { Component, OnInit } from '@angular/core';
import { LogInDetails } from './log-in-details';
import { Response } from './../response';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in-service',
  templateUrl: './log-in-service.component.html',
  styleUrls: ['./log-in-service.component.sass']
})
export class LogInServiceComponent implements OnInit {

  constructor(private httpClient:HttpClient){};
 
  url ='https://gdu1yhfq3l.execute-api.ap-south-1.amazonaws.com/Development';
  logInDetails = new LogInDetails();
  response = new Response();

  ngOnInit() {
  }
  logIn()
  {
    console.log(this.logInDetails);
    //Calling Post Function Of Lamda
    this.httpClient.post(this.url,this.logInDetails).subscribe(
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
