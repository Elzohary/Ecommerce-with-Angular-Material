import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Output() showCategory= new EventEmitter<string>();
  categories: Array<string> | undefined;
  categoriesSubscription : Subscription | undefined;


  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCAtegories().subscribe((response)=> {
      this.categories = response;
    });
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) 
    {
      this.categoriesSubscription.unsubscribe();
    }
  }

  onShowCategory(category: string) : void
  {
    this.showCategory.emit(category);
  }
}
