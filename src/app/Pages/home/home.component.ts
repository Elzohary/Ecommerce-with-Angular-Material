import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/products.model';
import { CartService } from 'src/app/Services/cart.service';
import { StoreService } from 'src/app/Services/store.service';

const ROWS_HEIGHT: {[id: number] : number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort: string = 'desc';
  count= '12';
  productsSubscription: Subscription | undefined ;

  constructor( private cartService : CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  getProducts() {
    this.productsSubscription =  this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe((_products)=> {
      this.products = _products;
    })
  }

  onColoumnCountChanged(colsNumber: number) : void
  {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string) : void
  {
    this.category = newCategory;
    this.getProducts();
  }

  onItemsCountChange(newCount: number) {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }

  onAddToCart(product : Product)
  {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
