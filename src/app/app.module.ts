/*imports de angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/*imports firebase*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

/*imports burgerQueen*/
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { OrderComponent } from './components/order/order.component';
import { MenuAppetizersComponent } from './components/menu-appetizers/menu-appetizers.component';
import { MenuDrinksComponent } from './components/menu-drinks/menu-drinks.component';
import { MenuLunchComponent } from './components/menu-lunch/menu-lunch.component';

/* Service */
import { ConectionService } from '../app/services/conection/conection.service';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
