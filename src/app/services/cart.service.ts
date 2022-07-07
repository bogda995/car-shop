import { Injectable } from '@angular/core';

import { Car } from '../common/model/car';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Car[] = [];

  constructor() { }

  add(car: Car) {
    this.items.push(car);
  }

  remove(car: Car) {
    const index: number = this.items.indexOf(car);
    if(index !== -1){
      this.items.splice(index, 1);
    }
  }

  getItems(){
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
