import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{

  loading:boolean = true;
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public product?: IProduct;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data
        this.loading = false;
      });
    });
  }

}
