import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _DataApiService: DataApiService) { }
  brandData: any[] = []


  ngOnInit(): void {
    this._DataApiService.getBrands().subscribe({
      next: (response) => {
        this.brandData = response.data
      }
    })
  }
}
