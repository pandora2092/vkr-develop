import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ListCardActionTypes, GetAllCardSuccessAction, GetCardByIdSuccessAction, GetCardByFieldsSuccessAction, GetCardByFieldsSimpleSuccessAction } from '../actions/list-card';

export interface StateUnits {
  cardList: any;
  oneCard: any;
  resultSearch: any;
  resultSearchSimple: any;
}

const initialState: StateUnits = {
  cardList: '',
  oneCard: '',
  resultSearch: '',
  resultSearchSimple: ''
};

export function cardListReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ListCardActionTypes.ActionGetAllCardSuccess: {
      const payload = (action as GetAllCardSuccessAction).payload;
      return {
        ...state,
        cardList: payload.card
      };
    }

    case ListCardActionTypes.ActionGetCardByIdSuccess: {
      const payload = (action as GetCardByIdSuccessAction).payload;
      return {
        ...state,
        oneCard: payload.row
      };
    }

    case ListCardActionTypes.ActionGetCardByFieldsSuccess: {
      const payload = (action as GetCardByFieldsSuccessAction).payload;
      return {
        ...state,
        resultSearch: payload.result
      };
    }

    case ListCardActionTypes.ActionGetCardByFieldsSimpleSuccess: {
      const payload = (action as GetCardByFieldsSimpleSuccessAction).payload;
      return {
        ...state,
        resultSearchSimple: payload.result
      };
    }

    default:
      return state;
  }
}

export const getUnits = (state: StateUnits) => state.cardList;
export const getOneUnits = (state: StateUnits) => state.oneCard;
export const getResultSearchSimple = (state: StateUnits) => state.resultSearchSimple;
export const getResultSearch = (state: StateUnits) => state.resultSearch;

export const getUnitsState = createFeatureSelector<StateUnits>('cardList');
export const gettUnits = createSelector(
  getUnitsState,
  getUnits,
);

export const getOneUnitsState = createFeatureSelector<StateUnits>('oneCard');
export const gettOneUnits = createSelector(
  getUnitsState,
  getOneUnits,
);

export const getResultSearchSimpleState = createFeatureSelector<StateUnits>('resultSearchSimple');
export const gettSearchSimpleUnits = createSelector(
  getUnitsState,
  getResultSearchSimple,
);

export const getResultSearchState = createFeatureSelector<StateUnits>('resultSearch');
export const gettSearchUnits = createSelector(
  getUnitsState,
  getResultSearch,
);


