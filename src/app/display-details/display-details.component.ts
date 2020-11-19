import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  showDetails = false;
  btnClickLog = [];
  clickNum = 0;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.showDetails = !this.showDetails;
    this.clickNum++;
    // this.btnClickLog.push(this.clickNum);
    this.btnClickLog.push(new Date());
  }
}
