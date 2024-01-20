import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private _apiService = inject(ApiService);
  productList: any[] = []

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: any[]) =>{
      this.productList = data;
    });
  }

}
