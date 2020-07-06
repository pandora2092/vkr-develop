import { AngularMaterialService } from './../../services/angular-material/angular-material.service';
import { ApiService } from './../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { ListNewsActionTypes, GetAllNewsSuccessAction, GetAllNewsAction, GetAllNewsFailureAction, AddNewsAction, AddNewsSuccessAction, DeleteNewsByIdSuccessAction, DeleteNewsByIdAction, EditNewsByIdAction, EditNewsByIdSuccessAction, GetNewsByIdAction, GetNewsByIdSuccessAction, GetNewsByFieldsAction, GetNewsByFieldsSuccessAction, GetNewsByFieldsSimpleAction, GetNewsByFieldsSimpleSuccessAction} from '../actions/list-news';


@Injectable()
export class NewsListEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private angularMaterialService: AngularMaterialService,
    ) {}

  @Effect()
  news$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionGetAllNews),
    switchMap((action: GetAllNewsAction) => {
      return this.apiService
        .getAllItem()
        .pipe(
          map((value: any) => {
            return new GetAllNewsSuccessAction(value);
          }),
          catchError((err) => {
            return of(new GetAllNewsFailureAction(err));
          })
        );
    })
  );

  @Effect()
  newsAdd$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionAddNews),
    switchMap((action: AddNewsAction) => {
      return this.apiService
        .addItemToTable(action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
        .pipe(
          map((value: any) => {
            return new AddNewsSuccessAction();
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );


  @Effect()
  deleteNews$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionDeleteNewsById),
    switchMap((action: DeleteNewsByIdAction) => {
      return this.apiService
        .deteleFromTable(action.payload.id)
        .pipe(
          map((value: any) => {
            return new DeleteNewsByIdSuccessAction();
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );

  @Effect()
  editNews$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionEditNewsById),
    switchMap((action: EditNewsByIdAction) => {
      return this.apiService
        .editRow(action.payload.id, action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
        .pipe(
          map((value: any) => {
            return new EditNewsByIdSuccessAction();
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );

  @Effect()
  getNewsById$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionGetNewsById),
    switchMap((action: GetNewsByIdAction) => {
      return this.apiService
        .getItemById(action.payload.id)
        .pipe(
          map((value: any) => {
            return new GetNewsByIdSuccessAction(value[0]);
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );

  @Effect()
  newsSearch$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionGetNewsByFields),
    switchMap((action: GetNewsByFieldsAction) => {
      return this.apiService
        .getItemByFieldSearch(action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
        .pipe(
          map((result: any) => {
            return new GetNewsByFieldsSuccessAction(result);
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
  newsSearchSimple$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionGetNewsByFieldsSimple),
    switchMap((action: GetNewsByFieldsSimpleAction) => {
      return this.apiService
        .getItemByFieldSearchSimple(action.payload.world)
        .pipe(
          map((result: any) => {
            return new GetNewsByFieldsSimpleSuccessAction(result);
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
