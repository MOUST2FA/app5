import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private _DataApiService: DataApiService, private _CartService: CartService, private _ToastrService: ToastrService) { }

  addWishlist: any = []

  wishlistId: any


  ngOnInit(): void {

    this._DataApiService.addToWishlistId().subscribe({
      next: (response) => {
        this.addWishlist = response.data
      }
    })
  }


  getWishlist(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message)
        this._CartService.cartNumber.next(response.numOfCartItems);
      }
    })
  }

  removeData(id: string): void {
    this._CartService.removeCarData(id).subscribe({
      next: (response) => {
        this.addWishlist = response.data
        this._CartService.cartNumber.next(response.numOfCartItems);
      }
    })
  }
}
