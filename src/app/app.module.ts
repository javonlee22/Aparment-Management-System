import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloorPlansComponent } from './components/floor-plans/floor-plans.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { AboutComponent } from './components/about/about.component'
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/floor-plans/components/listing/listing.component';
import { UnitComponent } from './components/floor-plans/components/unit/unit.component';
import { TenantDashboardComponent } from './components/tenant-dashboard/tenant-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    FloorPlansComponent,
    ContactUsComponent,
    AmenitiesComponent,
    AboutComponent,
    HomeComponent,
    ListingComponent,
    UnitComponent,
    TenantDashboardComponent,
    AdminDashboardComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
