import { Component, OnInit } from '@angular/core';
import { MentorListService } from '../Services/mentor-list.service';
import { IMentorList } from '../Interfaces/IMentorList';
import { IUserDetails } from '../Interfaces/IUserDetails';
import { AuthService } from '../Services/auth.service';
import { ITrainning } from '../Interfaces/ITrainning';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css'],
  
})
export class UserHomePageComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(private listOfMentor:MentorListService, private _authService:AuthService, private notifierService:NotifierService) { 
    this.notifier = notifierService;
  }

  mentor:IMentorList[]=[{
    meId:null, 
    meUsername :null,
    meYearsOfExperience:null, 
    msSelfRating :null,
    msTrainingDelivered :null,
    msFacilitiesOffered :null,
    skId :null,
    skName :null,
    skDuration :null,
    skPrerequistes :null
  }]
  user:IUserDetails = null; 
  details:ITrainning={
    trUId:null,
    trMId:null,
    trSId:null
  }
  ngOnInit() {
    this._authService.fetchUserDetails;
    debugger
    this.listOfMentor.mentorList().subscribe((
    res:IMentorList[])=>{
      debugger
    this.mentor = [...res]
    console.log(this.mentor);
  }
    )
  }
  nominate(meId:number,sId:number,uId:number){
    this.details.trMId = meId;
    this.details.trSId = sId;
    this.details.trUId = uId;
    this.notifier.notify("success", "The trainer has been Nominated");
    this.listOfMentor.nominateMentor(this.details).subscribe();
  }
}
