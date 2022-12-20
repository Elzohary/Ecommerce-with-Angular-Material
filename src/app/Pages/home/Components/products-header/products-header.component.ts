import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {

  sort: string = 'Desc';
  itemsShowCount: number = 12;
  @Output() coloumnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string) : void
  {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number) : void
  {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColoumnUpdated(colsNum: number) :void
  {
    this.coloumnsCountChange.emit(colsNum);
  }
}
