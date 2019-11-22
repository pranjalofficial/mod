import { PipeTransform, Pipe } from '@angular/core';
import { IMentorList } from './IMentorList';

@Pipe({
        name:'searchskill'
    })
    export class searchskill implements PipeTransform
    {
        transform(mentorSkills:IMentorList[],searchskills:string)
        {
            if(!mentorSkills ||!searchskills)
            {
                return mentorSkills
            }
            return mentorSkills.filter(x=>x.skName.toLowerCase().startsWith(searchskills.toLowerCase()));
        }
    } 
