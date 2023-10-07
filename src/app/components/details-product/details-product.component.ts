import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _DataApiService: DataApiService, private _CartService: CartService, private _ToastrService: ToastrService) { }

  detailsProduct: any = {}

  productId: any

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (prams) => {
        this.productId = prams.get('id')
      }
    })

    this._DataApiService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.detailsProduct = response.data
      }
    })

  }


  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    autoplay: true,
    nav: false
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
