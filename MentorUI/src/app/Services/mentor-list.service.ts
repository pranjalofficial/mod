import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMentorList } from '../Interfaces/IMentorList';
import { Observable, ObservedValueOf } from 'rxjs';
import { ITrainning } from '../Interfaces/ITrainning';
import { INominationList } from '../Interfaces/INominationList';
import { ITechnology } from '../Interfaces/ITechnologies';
import { IMentorSkills } from '../Interfaces/IMentorSkills';

@Injectable({
  providedIn: 'root'
})
export class MentorListService {

  constructor(private http:HttpClient) { }
  mentorlistURL:string = "http://localhost:29158/api/";
  userUrl:string = "http://localhost:29212/api/";
  mentorList():Observable<IMentorList[]>{
    return this.http.get<IMentorList[]>(this.mentorlistURL+"Mentor");
  }
  nominateMentor(trainingInput:ITrainning){
    return this.http.post(this.userUrl+"User",trainingInput,{headers: new HttpHeaders({'Content-type': 'application/json'})
  }
  )} 
  getNominations(id:number):Observable<INominationList[]>{
    return this.http.get<INominationList[]>(this.mentorlistURL+"Nominations/"+id);
  } 

  getSkillsList():Observable<ITechnology[]>{
    return this.http.get<ITechnology[]>(this.mentorlistURL+"Admin");
  }
  addMentorSkills(addSkills:IMentorSkills){
    debugger
    return this.http.post(this.mentorlistURL+"Mentor",addSkills,{headers: new HttpHeaders({'Content-type': 'application/json'})
  }
  );
  }
}
