import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuDrinksService {

  constructor(private http: HttpClient) {
  }

  drinksMenu(){
    return this.http.get('../../assets/Data/menu-data-drinks.json')
  }

}
