import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: "",
      password: ""
    });
  }

  login = () => {
    var body = {
      email: this.loginForm.value["email"],
      password: this.loginForm.value["password"]
    };
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token",
        observe: "response"
      }),
      withCredentials:true
    };
    this.http
      .post("http://localhost:8080/api/tenant/login", body, httpOptions)
      .subscribe(
        data => {
          this.cookie.set("token", data['token']);
          this.router.navigate(['/dashboard'])
        },
        error => {
          alert("Incorrect Email/Password Combination");
        }
      );
  };

}
