import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product | undefined;
  // Definition des property product
  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  /*
    addToCart-Funktion bekommt als Argument die Variable product vom Datentyp Product
    benutzt die Methode addToCart aus dem Service cartService um das ausgewählte product in
    den Warenkorb des aktuellen Benutzers (.this) hinzuzufügen und gibt eine Benachrichtigung aus
  */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}