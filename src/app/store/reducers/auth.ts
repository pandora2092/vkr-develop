import { Action } from '@ngrx/store';
import { ActionTypes, LoginSuccessAction } from '../actions/auth';

const authInitialState = {

};

export function authReducer(state = authInitialState, action: Action) {

  switch (action.type) {

    case ActionTypes.ActionLoginSuccess: {
      const payload = (action as LoginSuccessAction).payload;
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
