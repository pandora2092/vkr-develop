import { Action } from '@ngrx/store';

export enum ListLogsActionTypes {
  ActionGetAllLogs = 'ACTION_GET_ALL_LOGS',
  ActionGetAllLogsSuccess = 'ACTION_GET_ALL_LOGS_SUCCESS',
  ActionGetAllLogsFailure = 'ACTION_GET_ALL_LOGS_FAILURE',
}

export class GetAllLogsAction implements Action {
  readonly type = ListLogsActionTypes.ActionGetAllLogs;
  public payload: { };

  constructor() {
    this.payload = { };
  }
}

export class GetAllLogsSuccessAction implements Action {
  readonly type = ListLogsActionTypes.ActionGetAllLogsSuccess;
  public payload: { logs: any };

  constructor(logs: any ) {
    this.payload = { logs };
  }
}

export class GetAllLogsFailureAction implements Action {
  readonly type = ListLogsActionTypes.ActionGetAllLogsFailure;
  public payload: { };

  constructor(err: any) {
    this.payload = {
      err,
    };
  }
}
