import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private _apiService = inject(ApiService);
  private _router = inject(Router)
  productList: IProduct[] = []

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) =>{
      this.productList = data;
    });
  }

  navegate(id: number): void{
    this._router.navigate(['/products', id]);
  }

}
