import { Component, OnInit } from '@angular/core';
import { IMentorDetails } from '../Interfaces/IMentorDetails';
import { AuthService } from '../Services/auth.service';
import { MentorListService } from '../Services/mentor-list.service';
import { INominationList } from '../Interfaces/INominationList';

@Component({
  selector: 'app-mentor-home-page',
  templateUrl: './mentor-home-page.component.html',
  styleUrls: ['./mentor-home-page.component.css']
})
export class MentorHomePageComponent implements OnInit {

  constructor(private _auth:AuthService, private mentorNom:MentorListService) { }
  mentorDetails:IMentorDetails={
    meId:null, 
    meUsername:null,
    mePassword:null, 
    meLinkedinUrl:null, 
    meRegDateTime:null, 
    meRegCode:null,
    meYearsOfExperience:null, 
    meActive:null
  }
  nomination:INominationList[] = null;
  ngOnInit() {
    this._auth.fetchMentorDetails;
    this.mentorNom.getNominations(this._auth.fetchMentorDetails.meId).subscribe((
    res:INominationList[])=>{
    this.nomination = [...res]
     } )
  }

}
