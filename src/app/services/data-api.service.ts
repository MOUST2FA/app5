import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {


   constructor(private _HttpClient:HttpClient) { }

    getProduct():Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }

    getProductById(id:any):Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }


    getCategories():Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }

    addToCategoriesId(id:string):Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`)
    }

    getBrands():Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    }

    addToBrandsId(id:string):Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`)
    }

    addToWishlist(id: string): Observable<any> {
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          productId: id
        }
      )
    }

    addToWishlistId(): Observable<any> {
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`
      )
    }
}
