import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  /*
    Die Variable items ist vom Typ Product[] und beinhaltet ein leeres Array [];
  */
  items: Product[] = []

  constructor(
    private http : HttpClient
  ) { }

  /*
    addToCart-Funktion hat als Parameter/Argument die Variable product vom Datentyp Product
    durch die Array-Funktion .push wird dem Array items (Warenkorb) des aktuellen Benutzers (.this) 
    das Produkt (product) dem Warenkorb hinzugefügt
  */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /*
    getItems-Funktion gibt als Rückgabewert den Warenkorb (items) des aktuellen Benutzers (.this) zurück
  */
  getItems() {
    return this.items;
  }

  /*
    clearCart-Funktion löscht das Array items (Warenkorb) indem sie ihm ein leeres Array zuweist
    und gibt als Rückgabewert das geleerte Array (Warenkorb) zurück
  */
  clearCart() {
    this.items = [];
    return this.items;
  }

  /*
    getShippingPrices-Funktion nutzt den HttpClient http um die shipping.json-Datei
    mittels des Befehls .get auszulesen. 
    Zusätzlich werden mittels dem Diamond-Operator <> die zu erwartenden Datentypen festgelegt.
  */
  getShippingPrices() {
    this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}