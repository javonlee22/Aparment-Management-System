import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"]
})
export class AdminDashboardComponent implements OnInit {
  apts: [];
  users: [];
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
    this.getApts();
    this.getWorkOrders();
    this.getTenants();
  }

  getApts = () => {
    this.http
      .get("http://localhost:8080/api/admin/apts", this.httpOptions)
      .subscribe(response => {
        this.apts = response["result"];
      });
  };

  getWorkOrders = () => {};

  getTenants = () => {
    this.http
      .get("http://localhost:8080/api/admin/tenants", this.httpOptions)
      .subscribe(response => {
        this.users = response["users"];
      });
  };

  goToAddApt = () => this.router.navigate(["/admin/dashboard/add-apt"]);
  goToAddUnit = () => this.router.navigate(["/admin/dashboard/add-unit"]);
  goToAddTenant = () => this.router.navigate(["/admin/dashboard/add-tenant"]);
}
