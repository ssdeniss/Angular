import { Action } from '@ngrx/store';

export const cartNode = 'cart';

export interface CartState {
  productId: number;
  productNumber: number;
}

export interface CartStateList {
  stateList: CartState [];
}

let initialState: CartStateList = {
  stateList: [{
    productId: 1,
    productNumber: 1,
  }],
};

export const CartReducer = (state: CartStateList = initialState, action: Action): CartStateList => {
  // Handle different action types here and return the updated state accordingly
  return state;
};