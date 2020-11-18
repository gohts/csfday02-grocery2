import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  productItems = [
    {
      name: 'Apple',
      imageUrl: 'assets/images/apple.jpeg'
    },
    {
      name: 'Kiwi',
      imageUrl: 'assets/images/kiwi.jpeg'
    },
    {
      name: 'Orange',
      imageUrl: 'assets/images/orange.jpeg'
    },
    {
      name: 'Pear',
      imageUrl: 'assets/images/pear.jpeg'
    },    
  ]

  cartItems = []

  constructor() { }

  ngOnInit(): void {
  }

  // Trigger the function to add to cart when add button clicked
  addQuantity (addItem) {
    const index = this.cartItems.findIndex(x => x.name == addItem.name);
    if (index >= 0) {
      this.cartItems[index].quantity++;
    } else {
      addItem.quantity = 1 ;
      this.cartItems.push(addItem)
    } 
    console.log('>>> Added item', addItem);
  }

  // Receive event emitter from child and remove the lineitem from cart
  removeLine ($event) {
    this.cartItems = this.cartItems.filter(e => e.name != $event.name);
    console.log('>>> Removed item', $event);
  }

}
