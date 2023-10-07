import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) { }

  carData: any = null

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next: (response) => {
        this.carData = response.data
      }
    })
  }

  removeItem(id: string): void {
    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        this.carData = response.data
        this._CartService.cartNumber.next(response.numOfCartItems)

      }
    })
  }

  changeCount(id: string, count: number): void {

    if (count >= 1) {
      this._CartService.upDataCartItem(id, count).subscribe({
        next: (response) => {
          this.carData = response.data
        }
      })
    }

  }

  clear():void{
    this._CartService.clearCartItem().subscribe({
      next:(response)=>{
        if(response.message == "success"){
          this.carData={};
        }
      }
    })
  }
}
