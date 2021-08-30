import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 message:string = '';
 subscription: Subscription;
  userdata;

  constructor(public _getData: UserServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem("hasData") == "yes") {
      this.userdata = true;
    }
  }

  clearStorage() {
    localStorage.clear()
  }




  

}
