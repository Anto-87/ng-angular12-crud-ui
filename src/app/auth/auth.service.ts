import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn  = new BehaviorSubject<boolean>(false);
  public loggedUserDetails = new BehaviorSubject<any>([]);

  constructor(private router:Router) { }

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  login(user:User){

    if(user.userName !=='' && user.password !==''){      
      localStorage.setItem("WINDOW_TOKEN_KEY", "token!@#ER");
      this.loggedUserDetails.next(user);
      this.loggedIn.next(true);
      this.router.navigate(['/home']);

    }
  }

  getUserDetails(){

    return this.loggedUserDetails;
  }

  logout(){
      localStorage.clear();
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
      
  }
}
