import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup; 
  private formSubmitAttempt?: boolean;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

   constructor(private fb: FormBuilder, private router : Router, private authService: AuthService,
    private snackBar : MatSnackBar) { 
   
    this.userForm  = this.fb.group({
        'userName': [null, [Validators.required]],
        'password': [null, [Validators.required]],
      });

    this.horizontalPosition = 'center';
    this.verticalPosition='top';

  }


  ngOnInit(): void {
    
    
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.userForm.valid)
    );
    
  }

  get f(){return this.userForm.controls;}
    

  onSubmit(){
    if(this.userForm.invalid){
      return;
    }else{
      this.authService.login(this.userForm.value);  
      // this.messageEvent.emit(this.userForm.value);  
    }
    this.formSubmitAttempt = true;
/*
    if(this.f.username.value == 'test' &&
     this.f.password.value == 'test'){
      this.router.navigate(['home']);
     }else{      
      this.snackBar.open('Invalid Credentials!!', 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });

    }*/
      
   
  }

}
