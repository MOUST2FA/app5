import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _DataApiService: DataApiService, private _CartService: CartService, private _ToastrService: ToastrService, private _Renderer2: Renderer2) {

  }

  isColor: boolean = false;

  productData: any[] = []

  categories: any[] = []

  ngOnInit(): void {
    this._DataApiService.getProduct().subscribe({
      next: (response) => {
        this.productData = response.data
      }
    })


    this._DataApiService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data
      }
    })


  }

  catSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true

  }

  minSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    autoplay: true,
    nav: true
  }


  addProduct(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this._CartService.cartNumber.next(response.numOfCartItems);
        this._ToastrService.success(response.message)
      }
    })
  }

  addWishlist(id: string, el1: HTMLButtonElement): void {

    this._Renderer2.setStyle(el1, 'color', 'red')

    this._DataApiService.addToWishlist(id).subscribe({
      next: (response) => {
        this._ToastrService.success('❤', response.message)

      }
    })
  }

}






