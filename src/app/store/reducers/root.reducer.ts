import { layoutReducer, LayoutStateInt } from './layout/layout.reducer';

export interface StateInt {
  layout: LayoutStateInt;
}

export const rootReducer = {
  layout: layoutReducer,
};
