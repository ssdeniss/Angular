import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartNode, CartStateList } from './cartProducts.reducer';

export const selectCartFeature = createFeatureSelector<CartStateList>(cartNode);


export const selectCartProducts = createSelector(
  selectCartFeature,
  (state: CartStateList): any => state,
);