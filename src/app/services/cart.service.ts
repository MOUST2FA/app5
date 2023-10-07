import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  myHeaders: any = {
    token: localStorage.getItem('token')
  }

  constructor(private _HttpClient: HttpClient) { }

cartNumber:BehaviorSubject<number>=new BehaviorSubject(0);


  addToCart(id: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id
      }
    )
  }

  getCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`)
  }


  removeCartItem(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }

  clearCartItem(): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`)
  }

  upDataCartItem(id: string, count: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: count
      }
    )
  }

  checkOut(cart_id: string, olderDetails: object): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart_id}?url=http://localhost:4200`,

      {
        shippingAddress: olderDetails
      }
    )
  }

  addToBrandCart(id: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id
      }
    )
  }

  addToCategoriesCart(id: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id
      }
    )
  }

  getOlder(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders`)
  }

  removeCarData(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }
}
