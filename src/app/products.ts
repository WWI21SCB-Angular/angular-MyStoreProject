export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

export const products = [
  {
    id: 1,
    name: 'LG OLED TV 55"',
    price: 1099,
    description: 'LG OLED TVs sind die High-End-Produkte im TV-Portfolio',
    img: '/img/lgoled.jpg'
  },
  {
    id: 2,
    name: 'iPhone 13',
    price: 799,
    description: 'Brandneu, blitzschnell & extrem ausdauernd: das Apple iPhone 13',
    img: '/img/iphone.jpg'
  },
  {
    id: 3,
    name: 'Playstation 5',
    price: 499,
    description: 'Sonys neustes Schmuckstück, die Playstation 5',
    img: '/img/ps5.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/