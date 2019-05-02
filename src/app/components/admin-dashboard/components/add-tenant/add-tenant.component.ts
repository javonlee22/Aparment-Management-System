import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-tenant",
  templateUrl: "./add-tenant.component.html",
  styleUrls: ["./add-tenant.component.css"]
})
export class AddTenantComponent implements OnInit {
  tenantForm: FormGroup;
  apts: []
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
    private fb: FormBuilder,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getApts()
    this.tenantForm = this.fb.group({
      first: "",
      last: "",
      email: "",
      pwd: "",
      phone: "",
      unit: ""
    });
  }

  getApts = () => {
    this.http.get('http://localhost:8080/api/admin/apts',this.httpOptions).subscribe(response => {
      this.apts = response['result']
    })
  };

  submit = () => {
    var body = {
      first_name: this.tenantForm.value["first"],
      last_name: this.tenantForm.value["last"],
      email: this.tenantForm.value["email"],
      password: this.tenantForm.value["pwd"],
      phone_number: this.tenantForm.value["phone"],
      unit: this.tenantForm.value["unit"]
    };

    this.http
      .post("http://localhost:8080/api/admin/create-tenant", body, this.httpOptions)
      .subscribe(
        response => {
          alert('Tenant Created')
          this.router.navigate(["/admin/dashboard"]);
        },
        error => {
          alert("Error Creating Apartment");
        }
      );
  };
}
