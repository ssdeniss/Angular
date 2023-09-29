import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct;

  constructor(private router: Router) {
  }


  navigateTo(productId: number | undefined): void {
    if (productId !== undefined) {
      this.router.navigate(['/about', productId]);
    } else {
      console.error('Product ID is undefined.');
    }
  }

  details = false;
}
