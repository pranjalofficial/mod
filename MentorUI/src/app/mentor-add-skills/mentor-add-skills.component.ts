import { Component, OnInit } from '@angular/core';
import { MentorListService } from '../Services/mentor-list.service';
import { ITechnology } from '../Interfaces/ITechnologies';
import { IMentorSkills } from '../Interfaces/IMentorSkills';
import { IMentorDetails } from '../Interfaces/IMentorDetails';
import { AuthService } from '../Services/auth.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-add-skills',
  templateUrl: './mentor-add-skills.component.html',
  styleUrls: ['./mentor-add-skills.component.css']
})
export class MentorAddSkillsComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(private route:Router ,private skills:MentorListService, private _auth : AuthService,private notifierService:NotifierService) {
    this.notifier = notifierService;
   }
skillDropDown:ITechnology[]=[{
  skId :null,
  skName :null,
  skToc :null,
  skDuration :null,
  skPrerequistes:null 
}]
skillsList:IMentorSkills={
  msId : null,
  msMId : null,
  msSId : null,
  msSelfRating : null,
  msYearsOfExperience : null,
  msTrainingDelivered : null,
  msFacilitiesOffered :null
}
temp:number=null;
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
something:string=null;
  ngOnInit() {
    this._auth.fetchMentorDetails;
    this.skills.getSkillsList().subscribe((
    res:ITechnology[])=>{
    this.skillDropDown = [...res]
}
)

  }
onSubmit(){
  debugger
  this.skillsList.msSId=this.temp;
  this.skillsList.msMId = this._auth.fetchMentorDetails.meId ;
  this.skills.addMentorSkills(this.skillsList).subscribe(
  ()=>{
    this.notifier.notify("success", "The Skill has been added");
        this.route.navigate(['mentor-home-page']);
  
});
}
}
