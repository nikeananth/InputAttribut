import {Component, Input, OnInit} from '@angular/core';
import { DashBoard } from '../shared/dash-board';

@Component({
  selector: 'app-dash-details',
  templateUrl: './dash-details.component.html',
  styleUrls: ['./dash-details.component.css']
})
export class DashDetailsComponent implements OnInit {

  @Input()
  selectedDashBoard: DashBoard;

  constructor() { }



  ngOnInit() {
  }




}
