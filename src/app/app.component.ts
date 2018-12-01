import { Component } from '@angular/core';
import { UserDetails } from './user-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Event Management';
  userData = new UserDetails();

  submit()
  {
    console.log(this.userData);
  }
  
}
