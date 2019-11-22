import { Injectable } from '@angular/core';
import { LoginRegistrationService } from './login-registration.service';
import { Router } from '@angular/router';
import { IUserDetails } from '../Interfaces/IUserDetails';
import { IMentorDetails } from '../Interfaces/IMentorDetails';
import { Ilogin } from '../Interfaces/ILoginDetails';
import { IAdminDetails } from '../Interfaces/IAdminDetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private login:LoginRegistrationService, private router:Router, private http:HttpClient) { }
  fetchUserDetails:IUserDetails;
  fetchMentorDetails:IMentorDetails;
  fetchAdminDetails:IAdminDetails;
  rootURL:string = "http://localhost:43858/api/Token";
  loggedIn = false;
  
  logOut():void{
    this.loggedIn =false;
  }

  userLoginAuth(logInDetails:Ilogin){
    this.login.userLogin(logInDetails).subscribe((
      res:IUserDetails)=>{
      this.fetchUserDetails=res;
      if(this.fetchUserDetails!=null)
      {
        this.loggedIn = true;
        this.GetTokenUser(logInDetails.username);
      }
      else{
        this.loggedIn = false;
        this.router.navigate(['Login']);
      }
      }
      )
  }

  mentorLoginAuth(logInDetails:Ilogin){
    this.login.mentorLogin(logInDetails).subscribe((
      res:IMentorDetails)=>{
      this.fetchMentorDetails=res;
      if(this.fetchMentorDetails!=null)
      {
        this.loggedIn = true;
        this.GetTokenMentor(logInDetails.username);
        return true;
      }
      else{
        this.loggedIn = false;
        return false;
      }
      }
      )
      return this.loggedIn;
  }

  adminLoginAuth(logInDetails:Ilogin):Boolean{
    this.login.adminLogin(logInDetails).subscribe((
      res:IAdminDetails)=>{
      this.fetchAdminDetails=res;
      if(this.fetchAdminDetails!=null)
      {
        this.loggedIn = true;
        this.GetTokenAdmin(logInDetails.username);
        return true;
      }
      else{
        this.loggedIn = false;
        return false;
      }
      }
      )
      return this.loggedIn;
  }

  GetTokenUser(username:string)
  {
      this.http.get(this.rootURL+'/GetUserToken/'+username).
      subscribe((res:any)=>{
        localStorage.setItem('token2',res.token);
        console.log(res.token);
        this.router.navigateByUrl('user-home-page');
      })
    }

    GetTokenMentor(username:string)
    {
        this.http.get(this.rootURL+'/GetUserToken/'+username).
        subscribe((res:any)=>{
          localStorage.setItem('token2',res.token);
          console.log(res.token);
          this.router.navigateByUrl('mentor-home-page');
        })
      }

      GetTokenAdmin(username:string)
      {
          this.http.get(this.rootURL+'/GetUserToken/'+username).
          subscribe((res:any)=>{
            localStorage.setItem('token2',res.token);
            console.log(res.token);
            this.router.navigateByUrl('admin-home-page');
          })
        }

  
}
