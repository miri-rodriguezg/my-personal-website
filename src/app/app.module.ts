import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MainCodingComponent } from "./coding/main-coding/main-coding.component";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './other/custom-header/custom-header.component';
import { PageNotFoundComponent } from "./other/page-not-found/page-not-found.component";
import { HomeComponent } from './home/home/home.component';

import { SkillsComponent } from './coding/skills/skills.component';
import { ProjectsComponent } from './coding/projects/projects.component';
import { HomeSectionsComponent } from './home/home-sections/home-sections.component';
import { WebAppsComponent } from './coding/web-apps/web-apps.component';
import { MobileAppsComponent } from './coding/mobile-apps/mobile-apps.component';
import { GamingAppsComponent } from './coding/gaming-apps/gaming-apps.component';
import { MainWorkComponent } from './work-experience/main-work/main-work.component';
import { MainHobbiesComponent } from './hobbies/main-hobbies/main-hobbies.component';
import { ActivitiesComponent } from './hobbies/activities/activities.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    PageNotFoundComponent,

    HomeComponent,
    HomeSectionsComponent,

    MainCodingComponent,
    SkillsComponent,
    ProjectsComponent,

    MainWorkComponent,
    WebAppsComponent,
    MobileAppsComponent,
    GamingAppsComponent,

    MainHobbiesComponent,
    ActivitiesComponent,

  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
