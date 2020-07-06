import { Action } from '@ngrx/store';

export enum ActionTypes {
  ActionSendEmail = 'ACTION_SEND_EMAIL',
  ActionSendEmailSuccess = 'ACTION_SEND_EMAIL_SUCCESS',
}

export class SendEmailAction implements Action {
  readonly type = ActionTypes.ActionSendEmail;
  public payload: {name: string, email: string, body: string};

  constructor(name: string, email: string, body: string) {
    this.payload = { name, email, body };
  }
}

export class SendEmailSuccessAction implements Action {
  readonly type = ActionTypes.ActionSendEmailSuccess;
  public payload: {result: string}

  constructor(result: string) {
    this.payload = { result};
  }
}
