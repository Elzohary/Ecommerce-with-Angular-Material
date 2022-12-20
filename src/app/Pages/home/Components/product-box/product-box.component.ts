import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/products.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;
  @Input() product: Product | undefined = {
    id: 1,
    title: 'Shoe',
    price: 150,
    category: 'Sport',
    description: "Lorem Ipsum",
    image: "https://via.placeholder.com/150"
  };
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart()
  {
    this.addToCart.emit(this.product);
  }
}
