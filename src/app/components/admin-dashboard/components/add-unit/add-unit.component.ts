import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-unit",
  templateUrl: "./add-unit.component.html",
  styleUrls: ["./add-unit.component.css"]
})
export class AddUnitComponent implements OnInit {
  unitForm: FormGroup;
  apts: []
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getApts()
    this.unitForm = this.fb.group({
      beds: "",
      baths: "",
      sqft: "",
      unitNum: "",
      apt: "",
      url: ""
    });
  }
  getApts = () => {
    this.http.get('http://localhost:8080/api/public/listings').subscribe(
      apts => {
        this.apts = apts['apts']
      }
    )
  }
  submit = () => {
    var body = {
      bedrooms: this.unitForm.value["beds"],
      bathrooms: this.unitForm.value["baths"],
      square_feet: this.unitForm.value["sqft"],
      unit_number: this.unitForm.value["unitNum"],
      building: this.unitForm.value["apt"],
      url: this.unitForm.value["url"]
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
      .post("http://localhost:8080/api/admin/add-unit", body, httpOptions)
      .subscribe(
        response => {
          alert('Unit Created')
          this.router.navigate(["/admin/dashboard"]);
        },
        error => {
          alert("Error Creating Apartment");
        }
      );
  };
}
