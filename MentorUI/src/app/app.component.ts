import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { IUserDetails } from './Interfaces/IUserDetails';
import { IMentorDetails } from './Interfaces/IMentorDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';
  constructor(private router:Router,private _authService: AuthService) { }

  ngOnInIt(){
    this._authService.fetchUserDetails;
    this._authService.fetchMentorDetails;
  }

  user:IUserDetails = null; 
  mentor:IMentorDetails = null;
}
