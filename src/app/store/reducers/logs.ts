import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ListLogsActionTypes, GetAllLogsSuccessAction } from '../actions/logs';

export interface StateLogs {
  logsList: any;
  oneLogs: any;
}

const initialState: StateLogs = {
  logsList: '',
  oneLogs: '',
};

export function logsListReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ListLogsActionTypes.ActionGetAllLogsSuccess: {
      const payload = (action as GetAllLogsSuccessAction).payload;
      return {
        ...state,
        logsList: payload.logs
      };
    }

    default:
      return state;

  }
}

export const getLogsList = (state: StateLogs) => state.logsList;

export const getLogsState = createFeatureSelector<StateLogs>('logsList');
export const getLogsSelector = createSelector(
  getLogsState,
  getLogsList,
);
