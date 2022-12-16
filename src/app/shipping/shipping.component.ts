import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  /*
    Deklarierung der Variable shippingCosts und Typenprüfung
  */
  shippingCosts!: Observable<{ type: string, price: number }[]>;
  
  /* 
    ngOnInit wird direkt nach dem Konstruktur aufgerufen und liest die Versandkosten
    mithilfe der Funktion getShippingPrices aus dem Service cartService aus
  */
  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

  constructor(private cartService: CartService) { }

}
