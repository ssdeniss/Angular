import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { cartNode, CartReducer, CartStateList } from './cartReducer/cartProducts.reducer';

export interface State {
  [cartNode]: CartStateList;
}

export const reducers: ActionReducerMap<State> = {
  [cartNode]: CartReducer,
};

export const metaReducer: MetaReducer<State>[] = [];