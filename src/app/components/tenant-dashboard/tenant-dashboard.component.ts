import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent implements OnInit {
  unit: any
  profile: any
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.cookie.get("token"),
      observe: "response"
    }),
    withCredentials: true
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUnitInfo()
    this.getProfile()
  }

  getUnitInfo = () => {
    this.http.get('http://localhost:8080/api/tenant/unit',this.httpOptions)
    .subscribe(response => {
      this.unit = response['unit']
    })
  }
  getProfile = () => {
    this.http.get('http://localhost:8080/api/tenant/profile',this.httpOptions)
    .subscribe(response => {
      this.profile = response['user']
      console.log(JSON.stringify(response))
    })
  }
}
