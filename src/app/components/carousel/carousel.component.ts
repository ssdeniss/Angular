import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {
  title = 'angular';
  loading = false;
  term = '';

  constructor(public productsService: ProductsService, public modalService: ModalService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(products => {
      this.loading = false;
    });
  }
}
