import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit, OnChanges {
  loading = false;
  productCount: number = 1;

  constructor(public product: ProductDetailsService) {
  }

  addProductToCart(productId: number | undefined) {
    if (productId === undefined) {
      console.log('Product id is undefined');
      return;
    }
    console.log(
      {
        productId: this.product.product.id,
        productCount: this.productCount,
      },
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productCount && changes.productCount.currentValue !== changes.productCount.previousValue) {
      console.log('Product count changed:', this.productCount);
      // Do something when productCount changes
    }
  }

  ngOnInit() {
    this.loading = true;
    this.product.getProduct().subscribe(product => {
      this.loading = false;
    });
  }
}
