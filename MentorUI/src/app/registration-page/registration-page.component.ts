import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { LoginRegistrationService } from '../Services/login-registration.service';
import { IUserRegistration } from '../Interfaces/IUserRegistration';
import { IMentorRegistration } from '../Interfaces/IMentorRegistration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(private notifierService:NotifierService, private regService:LoginRegistrationService,private route:Router) {
    this.notifier = notifierService;
   }
user:IUserRegistration={
  usUsername : null,
  usPassword :null,
  usFirstName :null,
  usLastName :null,
  usContactNumber :null
}
mentor:IMentorRegistration={
  meUsername:null, 
  mePassword :null,
  meLinkedinUrl :null,
  meYearsOfExperience :null
}
  ngOnInit() {
  }
register(email:string,pass:string,url:string,years:number){
  debugger
  this.mentor.meUsername = email;
  this.mentor.mePassword = pass;
  this.mentor.meLinkedinUrl = url;
  this.mentor.meYearsOfExperience = years;
  this.notifier.notify("success", "Registration Succefull");
  this.regService.mentorRegistration(this.mentor).subscribe(()=>{
    this.route.navigate(['Registration']);
  });
}
userRegister(email:string,pass:string,fname:string,lname:string,contact:number){
  debugger
  this.user.usUsername =email;
  this.user.usPassword = pass;
  this.user.usFirstName = fname;
  this.user.usLastName = lname;
  this.user.usContactNumber = contact;
  this.notifier.notify("success", "Registration Succefull");
  this.regService.userRegistration(this.user).subscribe(()=>{
    this.route.navigate(['Registration']);
  }
  );
}
}
