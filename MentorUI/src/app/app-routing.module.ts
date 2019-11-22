import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { MentorHomePageComponent } from './mentor-home-page/mentor-home-page.component';
import { MentorAddSkillsComponent } from './mentor-add-skills/mentor-add-skills.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';



const routes: Routes = [
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"user-home-page",
    component:UserHomePageComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"mentor-home-page",
    component:MentorHomePageComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"add-skills",
    component:MentorAddSkillsComponent,
    canActivate:[AuthGuardService]
  },
  {
  path:"admin-home-page",
  component:AdminHomePageComponent,
  canActivate:[AuthGuardService]
  },
  {
    path:"Registration",
    component:RegistrationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
