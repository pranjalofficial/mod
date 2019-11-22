import { Component, OnInit } from '@angular/core';
import { MentorListService } from '../Services/mentor-list.service';
import { ITechnology } from '../Interfaces/ITechnologies';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private skills:MentorListService) { }
  skillDropDown:ITechnology[]=[{
    skId :null,
    skName :null,
    skToc :null,
    skDuration :null,
    skPrerequistes:null 
  }]
  ngOnInit() {
    this.skills.getSkillsList().subscribe((
      res:ITechnology[])=>{
      this.skillDropDown = [...res]
    }
    )
}
}
