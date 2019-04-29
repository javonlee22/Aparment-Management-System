import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { environment } from "../../../environments/environment";
import { ActivatedRoute, Router } from '@angular/router'
import * as Crypto from "crypto-js";

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
          var encToken = this.encryptCookie(data["token"]);
          this.cookie.set("token", encToken);
          this.router.navigate(['/dashboard'])
        },
        error => {
          alert("Incorrect Email/Password Combination");
        }
      );
  };

  encryptCookie = (val: String) => {
    const key = Crypto.enc.Utf8.parse(environment.privateKey);
    const iv = Crypto.enc.Utf8.parse(environment.privateKey);
    const encrypted = Crypto.AES.encrypt(
      Crypto.enc.Utf8.parse(val.toString()),
      key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: Crypto.mode.CBC,
        padding: Crypto.pad.Pkcs7
      }
    );
    return encrypted.toString();
  };
}
