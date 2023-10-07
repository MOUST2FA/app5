import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _Router: Router, protected _CartService: CartService) { }
  cartCount: number = 0

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartCount = data
      }
    })


    this._CartService.getCart().subscribe({
      next: (response) => {
        this._CartService.cartNumber.next(response.numOfCartItems)
      }
    })
  }

  singOut(): void {
    localStorage.removeItem('token')
    this._Router.navigate(['/login'])
  }
}
