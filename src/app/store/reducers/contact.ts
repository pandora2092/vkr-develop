import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { SendEmailSuccessAction, ActionTypes } from '../actions/contact';

export interface StateContact {
  contact: any;
}

const contactInitialState: StateContact = {
  contact: {
    name: '',
    email: '',
    body: ''
  }
};

export function contactReducer(state = contactInitialState, action: Action) {

  switch (action.type) {

    case ActionTypes.ActionSendEmailSuccess: {
      const payload = (action as SendEmailSuccessAction).payload;
      return {
        ...state,
        contact: {
          name: '',
          email: '',
          body: ''
        }
      };
    }

    default:
      return state;
  }
}

export const getResponse = (state: StateContact) => state.contact;

export const getResponseState = createFeatureSelector<StateContact>('contact');
export const getResponseSelector = createSelector(
  getResponseState,
  getResponse,
);

