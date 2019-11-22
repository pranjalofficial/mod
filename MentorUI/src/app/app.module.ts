import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { searchskill } from './Interfaces/pipe';
import { NotifierModule , NotifierOptions } from "angular-notifier";
import { MentorHomePageComponent } from './mentor-home-page/mentor-home-page.component';
import { MentorAddSkillsComponent } from './mentor-add-skills/mentor-add-skills.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomePageComponent,
    searchskill,
    MentorHomePageComponent,
    MentorAddSkillsComponent,
    AdminHomePageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig(
      customNotifierOptions
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
