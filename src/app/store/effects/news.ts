import { AngularMaterialService } from './../../services/angular-material/angular-material.service';
import { ApiService } from './../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { ListNewsActionTypes, GetAllNewsAction,  GetAllNewsSuccessAction, GetAllNewsFailureAction} from '../actions/news';


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
        .getAllNews()
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
}
