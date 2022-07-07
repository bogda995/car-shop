import { Component } from '@angular/core';
import {CarService} from "./services/car.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Luxury Cars';

  constructor(public carService: CarService,
              public cartService: CartService) {
  }

}
