import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  showpackages: boolean;

  constructor() { 
    this.showpackages = false;
  }

  ngOnInit() {
  }

  showPackages () {
    this.showpackages = true;
  }

}
