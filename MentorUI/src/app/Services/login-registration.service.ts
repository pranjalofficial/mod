import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ilogin } from '../Interfaces/ILoginDetails';
import { IUserDetails } from '../Interfaces/IUserDetails';
import { Observable } from 'rxjs';
import { IMentorDetails } from '../Interfaces/IMentorDetails';
import { IAdminDetails } from '../Interfaces/IAdminDetails';
import { IUserRegistration } from '../Interfaces/IUserRegistration';
import { IMentorRegistration } from '../Interfaces/IMentorRegistration';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http:HttpClient) { }
  loginUrl:string ="https://localhost:44324/api/";

  userLogin(loginDetails:Ilogin):Observable<IUserDetails>{
    return this.http.post<IUserDetails>(this.loginUrl+"User",loginDetails,{headers: new HttpHeaders({'Content-type': 'application/json'})  
  } 
   )
  }

  mentorLogin(loginDetails:Ilogin):Observable<IMentorDetails>{
    return this.http.post<IMentorDetails>(this.loginUrl+"Mentor",loginDetails,{headers: new HttpHeaders({'Content-type': 'application/json'})  
  } 
   )
  }
  adminLogin(loginDetails:Ilogin):Observable<IAdminDetails>{
    return this.http.post<IAdminDetails>(this.loginUrl+"Admin",loginDetails,{headers: new HttpHeaders({'Content-type': 'application/json'})  
  } 
   )
  }

  userRegistration(regDetails:IUserRegistration){
    return this.http.put(this.loginUrl+"User",regDetails,{headers: new HttpHeaders({'Content-type': 'application/json'})  
  } 
   )
  }

  mentorRegistration(regDetails:IMentorRegistration){
    return this.http.put(this.loginUrl+"Mentor",regDetails,{headers: new HttpHeaders({'Content-type': 'application/json'})  
  } 
   )
  }

}
