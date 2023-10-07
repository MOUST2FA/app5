import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-brand-product',
  templateUrl: './brand-product.component.html',
  styleUrls: ['./brand-product.component.scss']
})
export class BrandProductComponent {
  constructor(private _ActivatedRoute: ActivatedRoute, private _DataApiService: DataApiService, private _CartService: CartService, private _ToastrService: ToastrService) { }

  detailsBrand: any[] = []
  productId: any

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (prams) => {
        this.productId = prams.get('id')
      }
    })

    this._DataApiService.addToBrandsId(this.productId).subscribe({
      next: (response) => {
        this.detailsBrand = response.data
        console.log(response.data);
      }
    })
  }

  addBrands(id: string): void {
    this._CartService.addToBrandCart(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message)
        this._CartService.cartNumber.next(response.numOfCartItems);
      }
    })
  }
}
