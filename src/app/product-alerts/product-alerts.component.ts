import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  /*
    @Input() = ermöglicht Übergabe von Datenstrukturen (in dem Fall Product) an andere Komponenten
  */
}
