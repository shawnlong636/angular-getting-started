import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems()

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor (
    private readonly cartService: CartService,
    private readonly formBuilder: FormBuilder
  ) { }

  onSubmit (): void {
    this.items = this.cartService.clearCart()
    console.warn('Your order has been submitted', this.checkoutForm.value)
    this.checkoutForm.reset()
  }
}
