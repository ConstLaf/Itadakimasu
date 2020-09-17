import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { OrderComponent } from './components/order/order.component';
import { MenuAppetizersComponent } from './components/menu-appetizers/menu-appetizers.component';
import { MenuDrinksComponent } from './components/menu-drinks/menu-drinks.component';
import { MenuLunchComponent } from './components/menu-lunch/menu-lunch.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    KitchenComponent,
    WaiterComponent,
    OrderComponent,
    MenuAppetizersComponent,
    MenuDrinksComponent,
    MenuLunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
