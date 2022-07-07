import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/common/model/car';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(public carService: CarService, public cartService: CartService) {}

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void {
    this.carService.getCars().subscribe(cars => (this.cars = cars));
  }

  addToCart(car: Car) {
    this.cartService.add(car);
    window.alert('Your car has been added tot the cart!');
  }

  public carRent() {
  window.alert('This feature will be soon available');
  }
  
}
