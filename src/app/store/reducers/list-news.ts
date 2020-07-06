import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ListNewsActionTypes, GetAllNewsSuccessAction, GetNewsByIdSuccessAction, GetNewsByFieldsSuccessAction, GetNewsByFieldsSimpleSuccessAction } from '../actions/list-news';

export interface StateUnits {
  newsList: any;
  oneNews: any;
  resultSearch: any;
  resultSearchSimple: any;
}

const initialState: StateUnits = {
  newsList: '',
  oneNews: '',
  resultSearch: '',
  resultSearchSimple: ''
};

export function newsListReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ListNewsActionTypes.ActionGetAllNewsSuccess: {
      const payload = (action as GetAllNewsSuccessAction).payload;
      return {
        ...state,
        newsList: payload.news
      };
    }

    case ListNewsActionTypes.ActionGetNewsByIdSuccess: {
      const payload = (action as GetNewsByIdSuccessAction).payload;
      return {
        ...state,
        oneNews: payload.row
      };
    }

    case ListNewsActionTypes.ActionGetNewsByFieldsSuccess: {
      const payload = (action as GetNewsByFieldsSuccessAction).payload;
      return {
        ...state,
        resultSearch: payload.result
      };
    }

    case ListNewsActionTypes.ActionGetNewsByFieldsSimpleSuccess: {
      const payload = (action as GetNewsByFieldsSimpleSuccessAction).payload;
      return {
        ...state,
        resultSearchSimple: payload.result
      };
    }

    default:
      return state;
  }
}

export const getUnits = (state: StateUnits) => state.newsList;
export const getOneUnits = (state: StateUnits) => state.oneNews;
export const getResultSearchSimple = (state: StateUnits) => state.resultSearchSimple;
export const getResultSearch = (state: StateUnits) => state.resultSearch;

export const getUnitsState = createFeatureSelector<StateUnits>('newsList');
export const gettUnits = createSelector(
  getUnitsState,
  getUnits,
);

export const getOneUnitsState = createFeatureSelector<StateUnits>('oneNews');
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


