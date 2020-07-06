import { ApiService } from './../../services/api.service';

import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  ActionTypes,
  LoginAction,
  LoginSuccessRedirectAction,
  LogoutAction,
  LogoutRedirectAction,
} from '../actions/auth';
import { map, switchMap, catchError, delay } from 'rxjs/operators';
import { LoginSuccessAction } from '../actions/auth';


@Injectable()
export class AuthEffects {

    constructor(
      private actions$: Actions,
      private apiService: ApiService
    ) {}

    @Effect()
    login$: Observable<Action> = this.actions$
      .pipe(
        ofType(ActionTypes.ActionLogin),
        switchMap((action: LoginAction) => {
          return this.apiService
            .authorization(action.payload.username, action.payload.password)
            .pipe(
              map((item: {token: string}) => {
                return new LoginSuccessAction(item.token, action.payload.redirectUrl);
              }),
              catchError((err) => {
                return of(new LoginSuccessRedirectAction(action.payload.redirectUrl));
              })
            );
        })
      );

    @Effect()
    loginSuccess$: Observable<Action> = this.actions$
      .pipe(
        ofType(ActionTypes.ActionLoginSuccess),
        switchMap((action: LoginSuccessAction) => {
            this.apiService.setLocalStorageItem('token', action.payload.accessToken);
            return of(new LoginSuccessRedirectAction(action.payload.redirectUrl));
          }
        )
      );

    @Effect()
    loginSuccessRedirect$: Observable<Action> = this.actions$
      .pipe(
        ofType(ActionTypes.ActionLoginSuccessRedirect),
        switchMap((action: LoginSuccessAction) => {
            this.apiService.redirectAfterLogin(action.payload.redirectUrl);
            return EMPTY;
          }
        )
      );

    @Effect()
    logout$: Observable<Action> = this.actions$
      .pipe(
        ofType(ActionTypes.ActionLogout),
        switchMap((action: LogoutAction) => {
            this.apiService.logout();
            return of(new LogoutRedirectAction());
          }
        )
      );

    @Effect()
    logoutRedirect$: Observable<Action> = this.actions$
      .pipe(
        ofType(ActionTypes.ActionLogoutRedirect),
        switchMap((action: LogoutRedirectAction) => {
            this.apiService.redirectAfterLogout();
            return EMPTY;
          }
        )
      );

}
