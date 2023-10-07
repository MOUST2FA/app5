import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  constructor(private _CartService: CartService) { }

  older: any= []

  ngOnInit(): void {
    this._CartService.getOlder().subscribe({
      next: (response) => {
        console.log(response.data);
        this.older = response.data
      }
    })
  }
}
