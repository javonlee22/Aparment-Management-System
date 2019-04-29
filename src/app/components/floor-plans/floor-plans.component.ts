import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-floor-plans',
  templateUrl: './floor-plans.component.html',
  styleUrls: ['./floor-plans.component.css']
})
@Injectable()
export class FloorPlansComponent implements OnInit {

  apartments = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getListings()
  }

  getListings = () => {
    this.http.get('http://127.0.0.1:8080/api/public/listings').subscribe((data) => this.apartments = data['apts'])
  }


}
