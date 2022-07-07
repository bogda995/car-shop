import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from 'src/app/common/model/car';
import { CartService } from 'src/app/services/cart.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    car?: Car;
    constructor(
      private activatedRoute: ActivatedRoute,
      private cartService: CartService,
      private carService: CarService
    ) {}
  
    async ngOnInit() {
      const carId: string = <string>this.activatedRoute.snapshot.paramMap.get('id');
      this.car = await this.getCar(carId);
    }
  
    public async getCar(id: string) {
      return await this.carService.getCar(id);
    }
  
    addToCart(car: Car) {
      this.cartService.add(car);
      window.alert('Your car has been added tot the cart!');
    }

}
