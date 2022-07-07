import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { Car } from 'src/app/common/model/car';
import { CarService } from 'src/app/services/car.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  faTimes = faTimes;

  constructor(
    public cartService: CartService,
    public carService: CarService) { }

  ngOnInit(): void {

  }

  removeCar(car: Car){
    this.cartService.remove(car);
    this.cartService.getItems();
  }

  clearCart(){
    this.items = this.cartService.clearCart();
  }
}
