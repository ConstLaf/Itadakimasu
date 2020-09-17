import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ClientOrder {
  clientName: string;
  tableNumber: number;
  selectedItem: Array<object>;
}

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  private ordersCollectionFirestore: AngularFirestoreCollection<ClientOrder>;
  ordersObserverData: Observable<ClientOrder[]>;

  constructor(private afs: AngularFirestore) {
    this.ordersCollectionFirestore = afs.collection<ClientOrder>('orders');
    this.ordersObserverData = this.ordersCollectionFirestore.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ClientOrder;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  waiterOrder(){
    return this.ordersObserverData;
  }

  addService(item: ClientOrder) {
    this.ordersCollectionFirestore.add(item);
  }

}