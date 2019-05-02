import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-apt",
  templateUrl: "./add-apt.component.html",
  styleUrls: ["./add-apt.component.css"]
})
export class AddAptComponent implements OnInit {
  aptForm: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.aptForm = this.fb.group({
      title: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      url: ""
    });
  }

  submit = () => {
    var body = {
      title: this.aptForm.value["title"],
      address: this.aptForm.value["address"],
      city: this.aptForm.value["city"],
      state: this.aptForm.value["state"],
      zip_code: this.aptForm.value["zip"],
      url: this.aptForm.value["url"]
    };

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.cookie.get("token"),
        observe: "response"
      }),
      withCredentials: true
    };

    this.http
      .post("http://localhost:8080/api/admin/add-apt", body, httpOptions)
      .subscribe(
        response => {
          alert('Apartment Created')
          this.router.navigate(["/admin/dashboard"]);
        },
        error => {
          alert("Error Creating Apartment");
        }
      );
  };
}
