import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _DataApiService: DataApiService) { }

  categories: any[] = []

  ngOnInit(): void {
    this._DataApiService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data
      }
    })
  }

}
