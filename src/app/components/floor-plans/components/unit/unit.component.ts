import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})

@Injectable()
export class UnitComponent implements OnInit {
  
  @Input() _id: String
  unit: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUnitByID()
  }

  getUnitByID = () => {
    this.http.get(`http://localhost:8080/api/public/units/${this._id}`).subscribe(data => this.unit = data['unit'])
  }

}
