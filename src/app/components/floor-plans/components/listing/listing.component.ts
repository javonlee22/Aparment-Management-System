import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() apartment: any;
  constructor() { }

  ngOnInit() {
    // this.showUnits()
  }

  showUnits = () => {
    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideDown("slow");
      });
    });
  }

  hideUnits = () => {

  }
}
