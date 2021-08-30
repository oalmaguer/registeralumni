import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from 'src/app/header/user-service.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  name: string;
  last_name: string;
  email: string;
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.last_name = localStorage.getItem('last_name');
    this.email = localStorage.getItem('email');
  }

}
