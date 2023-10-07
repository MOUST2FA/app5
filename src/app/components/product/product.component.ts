import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private _DataApiService: DataApiService, private _CartService: CartService, private _ToastrService: ToastrService) { }
  productData: any[] = []

  term: string = '';

  ngOnInit(): void {
    this._DataApiService.getProduct().subscribe({
      next: (response) => {
        this.productData = response.data
      }
    })
  }


  addProduct(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message)
        this._CartService.cartNumber.next(response.numOfCartItems);
      }
    })
  }
}
