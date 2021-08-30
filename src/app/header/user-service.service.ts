import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();

  private userData = new BehaviorSubject(false);
  currentUserData = this.userData.asObservable();

  constructor () {}

    changeMessage(message) {
      this.messageSource.next(message);
    }

    getUserData(data) {
      this.userData.next(data);
    }

}
