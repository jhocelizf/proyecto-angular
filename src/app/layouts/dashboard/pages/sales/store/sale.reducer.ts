import { createFeature, createReducer, on } from '@ngrx/store';
import { SaleActions } from './sale.actions';
import { ISale } from '../models';

export const saleFeatureKey = 'sale';

export interface State {
  loadingSales: boolean;
  sales: ISale[];
  error: unknown;

}

export const initialState: State = {
  loadingSales: false,
  sales: [],
  error: null,

};

export const reducer = createReducer(
  initialState,
  on(SaleActions.loadSales, state => state),
  on(SaleActions.loadSalesSuccess, (state, action) => state),
  on(SaleActions.loadSalesFailure, (state, action) => state),
);

export const saleFeature = createFeature({
  name: saleFeatureKey,
  reducer,
});

