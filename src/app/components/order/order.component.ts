import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../../services/summary/summary.service';
import { ConectionService } from '../../services/conection/conection.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedOrdersArray = []; // propiedad de tipo array | guarda el pedido completo en un array
  observerDoc: Observable <any[]>; // observable del documento

  get clientName(): string { // método clientName de tipo string
    return this.summaryConection.clientInfo.clientName; // retorna el nombre del cliente de tipo string, desde la clase summaryConection (del el servicio), en el objeto de la propiedad clientInfo, la propiedad clientName
  }

  get tableNumber(): number { //  método tableNumber de tipo número
    return this.summaryConection.clientInfo.tableNumber;// retorna el número de mesa de tipo número, desde la clase summaryConection (del el servicio), en el objeto de la propiedad clientInfo, la propiedadtableNumber
  }

  get total(): number { // método (de tipo número)
    return this.selectedOrdersArray.reduce( // toma el array y con .reduce suma todo lo que esta dentro de él
      (accumulator, currentValue) => accumulator + currentValue.price // todo lo que esta dentro del arra, toma el producto y precio y va a sumar su valor actual según su cantidad
      , 0 // valor inicial del acumulador
    );
  }// estos 3 get renderizan los datos en order.component.hmtl

  increase(product){ // en este método nos traemos el método increase del servicio summary de la clase LineITem, que tiene como parametro el "prodcuto"
    product.increase(); // para incorporarlo al evento click en el botón de + en el template
  }

  decrease(product){ // en este método nos traemos el método decrease del servicio summary de la clase LineITem, que tiene como parametro el "prodcuto"
    product.decrease(); // para incorporarlo al evento click en el botón de - en el template

    if (product.quantity <= 0) { // si la cantidad del producto es menor o = a 0
      const index = this.selectedOrdersArray.indexOf(product, 0); // en la constante index se guarda: se localiza el producto desde la posición 0 del arreglo
      if (index > -1) { // si la posición es mayor a -1
        this.selectedOrdersArray.splice(index, 1); // en el selectedOrdersArray se removera desde la posición del producto (primer parametro, que es la posición donde se encuentra) y la cantidad (segundo parámetro: 1 )
      }
    }
  }

  constructor(
    public summaryConection: SummaryService, // es público para que el usuario pueda ver la orden
    public db: AngularFirestore, // llamando a la librería del angular fire
    private conection: ConectionService ){// es privado porque representa la conección con el servicio y la base de datos
    this.observerDoc = db.collection('orders').valueChanges(); // llama al orservador de documentos de la colección de firebase ("orders") | .valueChanges escuchador de lo que esta pasando en los documentos de la colección orders y la posible consulta
   }

  ngOnInit(): void {
    this.listOrders(); // al cargar la página, se cargue este método
  }

  listOrders(){ // método muestra la orden
    this.selectedOrdersArray = this.summaryConection.showOrder(); // en el array selectedOrdersArray llame a la clase summaryConection y se ejecute showOrder (que a su vez retorna la orden con todos los métodos de contador,inc,desc)
  }

  sendToData(){ // método que se ejecuta en el template (en ngSubmit) para guardar los datos ingresados en el form
    const orders: any = { // declara constante orders de tipo "cualquiera", guarda como objeto
      clientName: this.summaryConection.clientInfo.clientName, // nombre de cliente, lo trae desde el servicio
      tableNumber: this.summaryConection.clientInfo.tableNumber, //número de mesa, lo trae desde el servicio
      selectedItem: this.summaryConection.summaryArray.map(item => Object.assign({}, item)) // método map, junta los array necesarios y los mete en uno nuevo
    }; // selectedItem (propiedad de orders) se guarda: summaryArray al aplicarle map, los extrae (cada los producto con todas sus carac) y con Object.assign (los denomina item) lo invidualiza y reseaigna en (selectedItem) como objeto

    this.conection.addService(orders); // llama al servicio conectionService | .addService: método de conectionService
    this.summaryConection.clientInfo.clientName = ''; // despues de mandar los datos, se limpian los campos
    this.summaryConection.clientInfo.tableNumber = ''; // despues de mandar los datos, se limpian los campos
    this.selectedOrdersArray.splice(0, this.selectedOrdersArray.length); // despues de mandar los datos, se limpian los campos, con el método splice, que elimina elementos de un array, primer parametro: 0: desde donde comienza a borrar elementos, en el segundo parametro: que borre el largo del elemento

  }


}
