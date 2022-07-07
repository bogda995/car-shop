import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Car } from '../../common/model/car';

@Component({
  selector: 'app-car-alert',
  templateUrl: './car-alert.component.html',
  styleUrls: ['./car-alert.component.css']
})
export class CarAlertComponent implements OnInit {

  @Input() car!: Car;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
