import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FloorPlansComponent } from './components/floor-plans/floor-plans.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { AboutComponent } from './components/about/about.component'
import { HomeComponent } from './components/home/home.component'
import { AdminLoginComponent } from './components/admin-login/admin-login.component'
import { TenantDashboardComponent } from './components/tenant-dashboard/tenant-dashboard.component'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddAptComponent } from './components/admin-dashboard/components/add-apt/add-apt.component';
import { AddTenantComponent } from './components/admin-dashboard/components/add-tenant/add-tenant.component';
import { AddUnitComponent } from './components/admin-dashboard/components/add-unit/add-unit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'floor-plans', component: FloorPlansComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard' , component: TenantDashboardComponent},
  { path: 'amenities', component:AmenitiesComponent },
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminLoginComponent},
  { path: 'admin/dashboard' , component: AdminDashboardComponent },
  { path: 'admin/dashboard/add-apt' , component: AddAptComponent },
  { path: 'admin/dashboard/add-tenant' , component: AddTenantComponent },
  { path: 'admin/dashboard/add-unit' , component: AddUnitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
