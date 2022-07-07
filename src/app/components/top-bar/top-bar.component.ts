import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {

  }

}
