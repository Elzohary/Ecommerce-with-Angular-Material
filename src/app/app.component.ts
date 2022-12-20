import { Component, OnInit } from '@angular/core';
import { Cart } from './Models/cart-item';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cart: Cart = { items: []};

  constructor( private cartService: CartService) {}

  ngOnInit(){
    this.cartService.cart.subscribe((_cart)=> this.cart = _cart);
  }

}
