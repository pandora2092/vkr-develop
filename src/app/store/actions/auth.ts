import { Action } from '@ngrx/store';

export enum ActionTypes {
  ActionLogin = 'ACTION_LOGIN',
  ActionLoginSuccess = 'ACTION_LOGIN_SUCCESS',
  ActionLoginSuccessRedirect = 'ACTION_LOGIN_SUCCESS_REDIRECT',
  ActionLogout = 'ACTION_LOGOUT',
  ActionLogoutRedirect = 'ACTION_LOGOUT_REDIRECT',
}

export class LoginAction implements Action {
  readonly type = ActionTypes.ActionLogin;
  public payload: {username: string, password: string, redirectUrl: string};

  constructor(username: string, password: string, redirectUrl: string) {
    this.payload = { username, password, redirectUrl };
  }
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.ActionLoginSuccess;
  public payload: {accessToken: string, redirectUrl: string}

  constructor(accessToken: string, redirectUrl: string) {
    this.payload = { accessToken, redirectUrl};
  }
}

export class LoginSuccessRedirectAction implements Action {
  readonly type = ActionTypes.ActionLoginSuccessRedirect;
  public payload: { redirectUrl: string }

  constructor(redirectUrl: string) {
    this.payload = { redirectUrl };
  }
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.ActionLogout;
  public payload: {};

  constructor() {
    this.payload = { };
  }
}

export class LogoutRedirectAction implements Action {
  readonly type = ActionTypes.ActionLogoutRedirect;
  public payload: {};

  constructor() {}
}
