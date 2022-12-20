import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatSidenavModule} from '@angular/material/sidenav';  
import { MatGridListModule} from '@angular/material/grid-list'; 
import { MatMenuModule} from '@angular/material/menu'; 
import { MatIconModule} from '@angular/material/icon'; 
import { MatExpansionModule} from '@angular/material/expansion'; 
import { MatListModule} from '@angular/material/list'; 
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatBadgeModule} from '@angular/material/badge'; 
import { MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsHeaderComponent } from './Pages/home/Components/products-header/products-header.component';
import { FiltersComponent } from './Pages/home/Components/filters/filters.component';
import { ProductBoxComponent } from './Pages/home/Components/product-box/product-box.component';
import { CartComponent } from './Pages/cart/cart.component';
import { CartService } from './Services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [CartService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
