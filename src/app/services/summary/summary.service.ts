import { Injectable } from '@angular/core';

export class LineItem {
  quantity: number;

  constructor(public product: any){
    this.quantity = 1;
  }

  get price(): number{
    return this.product.price * this.quantity;
  }

  get name(): string{
    return this.product.name;
  }

  increase(){
    this.quantity++;
  }

  decrease(){
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}

@Injectable({
  providedIn: 'root'
})

export class SummaryService {

  summaryArray: Array<any>;
  clientInfo: any;

  constructor() {
    this.summaryArray = [];
    this.clientInfo = {
      clientName: '',
      tableNumber: null
    }
   }

   saveClientInfo(info: any) {
    this.clientInfo = info;
   }

   pushToOrder(product: any){
    const lineItem = this.summaryArray.find(lineItem => lineItem.product == product);

    if (lineItem) {
      lineItem.increase();
    } else {
      this.summaryArray.push(new LineItem(product));
    }

    this.showOrder();
  }

  showOrder(){
    return this.summaryArray;
  }

}

