import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-categories-product',
  templateUrl: './categories-product.component.html',
  styleUrls: ['./categories-product.component.scss']
})
export class CategoriesProductComponent {
  constructor(private _ActivatedRoute: ActivatedRoute, private _DataApiService: DataApiService, private _CartService: CartService, private _ToastrService: ToastrService) { }

  detailsCategories: any[] = []
  productId: any

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (prams) => {
        this.productId = prams.get('id')
      }
    })

    this._DataApiService.addToCategoriesId(this.productId).subscribe({
      next: (response) => {
        this.detailsCategories = response.data
      }
    })
  }

  addCategories(id: string): void {
    this._CartService.addToCategoriesCart(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message)
        this._CartService.cartNumber.next(response.numOfCartItems);
      }
    })
  }
}
