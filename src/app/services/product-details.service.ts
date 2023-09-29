import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { IProduct } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class ProductDetailsService {
  product: IProduct;

  constructor(
    private location: Location, private http: HttpClient,
  ) {
  }

  getProduct(): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${this.getUrlProductId()}`).pipe(
      tap(product => this.product = product),
    );
  }

  private getUrlProductId(): string {
    const url = this.location.path().split('/');
    return url[url.length - 1];
  }


}
