import { Component } from '@angular/core'

import { Observable } from 'rxjs'
import { CartService, shippingPrice } from '../services/cart.service'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts!: Observable<shippingPrice[]>

  constructor (
    private readonly cartService: CartService
  ) { }

  ngOnInit (): void {
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}
