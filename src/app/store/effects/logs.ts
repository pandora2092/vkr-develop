import { AngularMaterialService } from './../../services/angular-material/angular-material.service';
import { ApiService } from './../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { ListLogsActionTypes, GetAllLogsAction,  GetAllLogsSuccessAction, GetAllLogsFailureAction} from '../actions/logs';


@Injectable()
export class LogsListEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private angularMaterialService: AngularMaterialService,
    ) {}

  @Effect()
  logs$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListLogsActionTypes.ActionGetAllLogs),
    switchMap((action: GetAllLogsAction) => {
      return this.apiService
        .getAllLogs()
        .pipe(
          map((value: any) => {
            return new GetAllLogsSuccessAction(value);
          }),
          catchError((err) => {
            return of(new GetAllLogsFailureAction(err));
          })
        );
    })
  );
}
