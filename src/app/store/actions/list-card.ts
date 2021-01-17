import { Action } from '@ngrx/store';

export enum ListCardActionTypes {
  ActionGetAllCard = 'ACTION_GET_ALL_CARD',
  ActionGetAllCardSuccess = 'ACTION_GET_ALL_CARD_SUCCESS',
  ActionGetAllCardFailure = 'ACTION_GET_ALL_CARD_FAILURE',
  ActionAddCard = 'ACTION_ADD_CARD',
  ActionAddCardSuccess = 'ACTION_ADD_CARD_SUCCUSS',
  ActionDeleteCardById = 'ACTION_DETELE_CARD_BY_ID',
  ActionDeleteCardByIdSuccess = 'ACTION_DETELE_CARD_BY_ID_SUCCESS',
  ActionEditCardById = 'ACTION_EDIT_CARD_BY_ID',
  ActionEditCardByIdSuccess = 'ACTION_EDIT_CARD_BY_ID_SUCCESS',
  ActionGetCardById = 'ACTION_GET_CARD_BY_ID',
  ActionGetCardByIdSuccess = 'ACTION_GET_CARD_BY_ID_SUCCESS',
  ActionGetCardByFields = 'ACTION_GET_CARD_BY_FIELDS',
  ActionGetCardByFieldsSuccess = 'ACTION_GET_CARD_BY_FIELDS_SUCCESS',
  ActionGetCardByFieldsSimple = 'ACTION_GET_CARD_BY_FIELDS_SIMPLE',
  ActionGetCardByFieldsSimpleSuccess = 'ACTION_GET_CARD_BY_FIELDS_SIMPLE_SUCCESS',
}

export class GetAllCardAction implements Action {
  readonly type = ListCardActionTypes.ActionGetAllCard;
  public payload: { };

  constructor() {
    this.payload = { };
  }
}

export class GetAllCardSuccessAction implements Action {
  readonly type = ListCardActionTypes.ActionGetAllCardSuccess;
  public payload: { card: any };

  constructor(card: any ) {
    this.payload = { card };
  }
}

export class GetAllCardFailureAction implements Action {
  readonly type = ListCardActionTypes.ActionGetAllCardFailure;
  public payload: { };

  constructor(err: any) {
    this.payload = {
      err,
    };
  }
}

export class AddCardAction implements Action {
  readonly type = ListCardActionTypes.ActionAddCard;
  public payload: { name: string,  code: string, manuscript: string, info: string, bibliography: string};

  constructor( name: string,  code: string, manuscript: string, info: string, bibliography: string ) {
    this.payload = { name,  code, manuscript, info, bibliography };
  }
}

export class AddCardSuccessAction implements Action {
  readonly type = ListCardActionTypes.ActionAddCardSuccess;
  public payload: { };

  constructor( ) {
    this.payload = { };
  }
}

export class DeleteCardByIdAction implements Action {
  readonly type = ListCardActionTypes.ActionDeleteCardById;
  public payload: { id: any };

  constructor( id: any ) {
    this.payload = { id };
  }
}

export class DeleteCardByIdSuccessAction implements Action {
  readonly type = ListCardActionTypes.ActionDeleteCardByIdSuccess;
  public payload: {  };

  constructor( ) {
    this.payload = {  };
  }
}

export class EditCardByIdAction implements Action {
  readonly type = ListCardActionTypes.ActionEditCardById;
  public payload: { id: any, name: string, code: string, manuscript: string, info: string, bibliography: string};

  constructor( id: any, name: string, code: string, manuscript: string, info: string, bibliography: string ) {
    this.payload = { id, name, code, manuscript, info, bibliography };
  }
}

export class EditCardByIdSuccessAction implements Action {
  readonly type = ListCardActionTypes.ActionEditCardByIdSuccess;
  public payload: {  };

  constructor( ) {
    this.payload = {  };
  }
}

export class GetCardByIdAction implements Action {
  readonly type = ListCardActionTypes.ActionGetCardById;
  public payload: { id: any };

  constructor( id: any ) {
    this.payload = { id };
  }
}

export class GetCardByIdSuccessAction implements Action {
  readonly type = ListCardActionTypes.ActionGetCardByIdSuccess;
  public payload: {row: any};

  constructor(row: any ) {
    this.payload = {row};
  }
}

export class GetCardByFieldsAction implements Action {
  readonly type = ListCardActionTypes.ActionGetCardByFields;
  public payload: {name: string, code: string, manuscript: string, info: string, bibliography: string};

  constructor(name: string, code: string, manuscript: string, info: string, bibliography: string) {
    this.payload = {name, code, manuscript, info, bibliography};
  }
}

export class GetCardByFieldsSuccessAction implements Action {
  readonly type = ListCardActionTypes.ActionGetCardByFieldsSuccess;
  public payload: {result: string};

  constructor(result: string ) {
    this.payload = {result};
  }
}

export class GetCardByFieldsSimpleAction implements Action {
  readonly type = ListCardActionTypes.ActionGetCardByFieldsSimple;
  public payload: {world: string};

  constructor(world: string ) {
    this.payload = {world};
  }
}

export class GetCardByFieldsSimpleSuccessAction implements Action {
  readonly type = ListCardActionTypes.ActionGetCardByFieldsSimpleSuccess;
  public payload: {result: string};

  constructor(result: string ) {
    this.payload = {result};
  }
}
