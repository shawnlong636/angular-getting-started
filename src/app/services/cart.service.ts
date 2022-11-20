import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from '../products'
import { Observable } from 'rxjs'

export interface shippingPrice {
  type: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor (
    private readonly http: HttpClient
  ) { }

  addToCart (product: Product): void {
    this.items.push(product)
  }

  getItems (): Product[] {
    return this.items
  }

  clearCart (): Product[] {
    this.items = []
    return this.items
  }

  getShippingPrices (): Observable<shippingPrice[]> {
    return this.http.get<shippingPrice[]>('/assets/shipping.json')
  }
}
