import { Component, OnInit } from '@angular/core';
import { Ilogin } from '../Interfaces/ILoginDetails';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(private _auth:AuthService,private router:Router,private notifierService:NotifierService ) { 
    this.notifier = notifierService;
  }
  check:Boolean;
  role:string;
  loginCredentials:Ilogin = {
    username:null,
    password:null
  };
  ngOnInit() {
  }

  onSubmit(username:string,password:string,role:string){
    this.role = role;
    this.loginCredentials.username = username;
    this.loginCredentials.password = password;
    if(this.role == "user")
    {
       this._auth.userLoginAuth(this.loginCredentials);
      
    }
    else if(this.role == "mentor")
    {
      this.check =this._auth.mentorLoginAuth(this.loginCredentials);
      
    }
    else if(this.role == "admin"){
      this.check = this._auth.adminLoginAuth(this.loginCredentials);
      
    }


  }
}
