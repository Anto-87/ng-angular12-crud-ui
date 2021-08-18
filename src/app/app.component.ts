import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-srlite';
  
  isLoggedIn$?: Observable<boolean>;

  constructor(private authService: AuthService, private router:Router){}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
  }

  toCustomer(){
    this.router.navigate(['/home']);
  }

}
