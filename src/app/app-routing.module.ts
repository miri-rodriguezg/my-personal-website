import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MainCodingComponent } from "./coding/main-coding/main-coding.component";
import { PageNotFoundComponent } from './other/page-not-found/page-not-found.component';
import { WebAppsComponent } from './coding/web-apps/web-apps.component';
import { MobileAppsComponent } from './coding/mobile-apps/mobile-apps.component';
import { GamingAppsComponent } from './coding/gaming-apps/gaming-apps.component';
import { MainWorkComponent } from './work-experience/main-work/main-work.component';
import { MainHobbiesComponent } from './hobbies/main-hobbies/main-hobbies.component';
import { PerformingComponent } from './hobbies/performing/performing.component';
import { TravellingComponent } from './hobbies/travelling/travelling.component';
import { SportsComponent } from './hobbies/sports/sports.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{ path: "", component: HomeComponent },

{ path: "about", component: AboutComponent },
{ path: "coding", component: MainCodingComponent },
{ path: "work", component: MainWorkComponent },
{ path: "extracurricular", component: MainHobbiesComponent },

{ path: "projects/web", component: WebAppsComponent },
{ path: "projects/mobile", component: MobileAppsComponent },
{ path: "projects/gaming", component: GamingAppsComponent },

{ path: "activities/performing", component: PerformingComponent },
{ path: "activities/travelling", component: TravellingComponent },
{ path: "activities/sports", component: SportsComponent },

{ path: "page-not-found", component: PageNotFoundComponent },
{ path: "**", redirectTo: "page-not-found", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
