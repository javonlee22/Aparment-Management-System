import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { CookieService } from 'ngx-cookie-service';
import { TenantComponent } from './components/admin-dashboard/components/tenant/tenant.component';
import { ApartmentComponent } from './components/admin-dashboard/components/apartment/apartment.component';
import { WorkOrderComponent } from './components/admin-dashboard/components/work-order/work-order.component';
import { AddAptComponent } from './components/admin-dashboard/components/add-apt/add-apt.component';
import { AddUnitComponent } from './components/admin-dashboard/components/add-unit/add-unit.component';
import { AddTenantComponent } from './components/admin-dashboard/components/add-tenant/add-tenant.component';



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
    AdminLoginComponent,
    TenantComponent,
    ApartmentComponent,
    WorkOrderComponent,
    AddAptComponent,
    AddUnitComponent,
    AddTenantComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
