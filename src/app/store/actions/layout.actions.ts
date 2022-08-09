import { createAction, props } from '@ngrx/store';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const ISMOBLIE = 'ISMOBLIE';

export const INCREASE = createAction('[INCREASE]', props<{ payload: number }>());
export const DECREASE = createAction('[DECREASE]', props<{ payload: number }>());
