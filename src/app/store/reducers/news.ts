import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ListNewsActionTypes, GetAllNewsSuccessAction } from '../actions/news';

export interface StateNews {
  newsList: any;
  oneNews: any;
}

const initialState: StateNews = {
  newsList: '',
  oneNews: '',
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

    default:
      return state;

  }
}

export const getNewsList = (state: StateNews) => state.newsList;

export const getNewsState = createFeatureSelector<StateNews>('newsList');
export const getNewsSelector = createSelector(
  getNewsState,
  getNewsList,
);
