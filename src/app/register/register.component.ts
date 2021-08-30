import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../header/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  showData: boolean = false;
  name: string;
  last_name: string;
  email: string;
  subscription: Subscription;

  constructor(private _userData: UserServiceService) { }

  async ngOnInit() {
    this.registerForm = new FormGroup({
      "name": new FormControl(''),
      "last_name": new FormControl(''),
      "email": new FormControl(''),
    });
  }



  onSubmit() {
    if (this.registerForm.controls['name'].value !== ""){
      this.name = this.registerForm.get('name').value;
      this.last_name = this.registerForm.get('last_name').value;
      this.email = this.registerForm.get('email').value;
      this._userData.changeMessage(true);
      localStorage.setItem("name", this.name);
      localStorage.setItem("last_name", this.last_name);
      localStorage.setItem("email", this.email);
      localStorage.setItem("hasData", "yes");
      alert("Tu usuario ha sido creato con exito broder!")
      location.reload();
      // this._userData.setUserData();
    }
  }

}
