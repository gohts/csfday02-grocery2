import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartItems : string;
  @Output() removeLineItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Trigger the event emitter when remove button clicked
  removeItem(removeItem) {
    this.removeLineItem.emit(removeItem);
  }

}
