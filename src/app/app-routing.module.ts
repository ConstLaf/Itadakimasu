import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaiterComponent } from '../app/components/waiter/waiter.component';
import { HomeComponent } from '../app/components/home/home.component';
import { MenuDrinksComponent } from '../app/components/menu-drinks/menu-drinks.component';
import { MenuAppetizersComponent } from '../app/components/menu-appetizers/menu-appetizers.component';
import { MenuLunchComponent } from '../app/components/menu-lunch/menu-lunch.component';
import { KitchenComponent } from '../app/components/kitchen/kitchen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'waiter', component: WaiterComponent,
    children:[
      { path: '', pathMatch: 'prefix', redirectTo: 'drinks'},
      { path: 'drinks', component: MenuDrinksComponent},
      { path: 'appetizers', component: MenuAppetizersComponent},
      { path: 'lunch', component: MenuLunchComponent}
    ]},
  { path: 'kitchen', component: KitchenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
