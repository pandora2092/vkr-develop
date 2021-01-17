import { AngularMaterialService } from './../../services/angular-material/angular-material.service';
import { ApiService } from './../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { ListCardActionTypes, GetAllCardSuccessAction, GetAllCardAction, GetAllCardFailureAction, AddCardAction, AddCardSuccessAction, DeleteCardByIdSuccessAction, DeleteCardByIdAction, EditCardByIdAction, EditCardByIdSuccessAction, GetCardByIdAction, GetCardByIdSuccessAction, GetCardByFieldsAction, GetCardByFieldsSuccessAction, GetCardByFieldsSimpleAction, GetCardByFieldsSimpleSuccessAction} from '../actions/list-card';


@Injectable()
export class CardListEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private angularMaterialService: AngularMaterialService,
    ) {}

  @Effect()
  card$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListCardActionTypes.ActionGetAllCard),
    switchMap((action: GetAllCardAction) => {
      return this.apiService
        .getAllItem()
        .pipe(
          map((value: any) => {
            return new GetAllCardSuccessAction(value);
          }),
          catchError((err) => {
            return of(new GetAllCardFailureAction(err));
          })
        );
    })
  );

  @Effect()
  cardAdd$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListCardActionTypes.ActionAddCard),
    switchMap((action: AddCardAction) => {
      return this.apiService
        .addItemToTable(action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
        .pipe(
          map((value: any) => {
            return new AddCardSuccessAction();
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );


  @Effect()
  deleteCard$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListCardActionTypes.ActionDeleteCardById),
    switchMap((action: DeleteCardByIdAction) => {
      return this.apiService
        .deteleFromTable(action.payload.id)
        .pipe(
          map((value: any) => {
            return new DeleteCardByIdSuccessAction();
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );

  @Effect()
  editCard$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListCardActionTypes.ActionEditCardById),
    switchMap((action: EditCardByIdAction) => {
      return this.apiService
        .editRow(action.payload.id, action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
        .pipe(
          map((value: any) => {
            return new EditCardByIdSuccessAction();
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );

  @Effect()
  getCardById$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListCardActionTypes.ActionGetCardById),
    switchMap((action: GetCardByIdAction) => {
      return this.apiService
        .getItemById(action.payload.id)
        .pipe(
          map((value: any) => {
            return new GetCardByIdSuccessAction(value[0]);
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );

  @Effect()
  cardSearch$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListCardActionTypes.ActionGetCardByFields),
    switchMap((action: GetCardByFieldsAction) => {
      return this.apiService
        .getItemByFieldSearch(action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
        .pipe(
          map((result: any) => {
            return new GetCardByFieldsSuccessAction(result);
          }),
          catchError((err) => {
            if (err.status === 404) {
              this.angularMaterialService.openSnackBar('Искомое значение не найдено', 'success');
            }
            return EMPTY;
          })
        );
    })
  );

  @Effect()
  cardSearchSimple$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListCardActionTypes.ActionGetCardByFieldsSimple),
    switchMap((action: GetCardByFieldsSimpleAction) => {
      return this.apiService
        .getItemByFieldSearchSimple(action.payload.world)
        .pipe(
          map((result: any) => {
            return new GetCardByFieldsSimpleSuccessAction(result);
          }),
          catchError((err) => {
            if (err.status === 404) {
              this.angularMaterialService.openSnackBar('Искомое значение не найдено', 'success');
            }
            return EMPTY;
          })
        );
    })
  );

}
