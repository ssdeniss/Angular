import { Component } from '@angular/core';
import { CartStateList } from '../../reducers/cartReducer/cartProducts.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartProducts } from '../../reducers/cartReducer/cartProducts.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  public cartProducts$: Observable<any> = this.store$.pipe(select(selectCartProducts));


  constructor(private store$: Store<CartStateList>) {
    console.log(this.cartProducts$);
  }
}
