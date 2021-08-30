import { Component, OnInit } from '@angular/core';
import { AllUsersService } from '../services/allusers.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users;
  constructor(private _allUsers: AllUsersService) {

   }

  ngOnInit() {
    this._allUsers.getAll().subscribe(users => {
      console.log(users);
      this.users = users;
    })
  };


}
