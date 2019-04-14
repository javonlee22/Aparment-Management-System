import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FloorPlansComponent } from './components/floor-plans/floor-plans.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { AboutComponent } from './components/about/about.component'
import { HomeComponent } from './components/home/home.component'


const routes: Routes = [
  { path: 'floor-plans', component: FloorPlansComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'amenities', component:AmenitiesComponent },
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
