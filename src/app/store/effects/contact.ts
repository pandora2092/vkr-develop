import { AngularMaterialService } from './../../services/angular-material/angular-material.service';
import { ApiService } from './../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { SendEmailSuccessAction, SendEmailAction, ActionTypes } from '../actions/contact';

@Injectable()
export class ContactEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private angularMaterialService: AngularMaterialService,
    ) {}

  @Effect()
  contact$: Observable<Action> = this.actions$
  .pipe(
    ofType(ActionTypes.ActionSendEmail),
    switchMap((action: SendEmailAction) => {
      return this.apiService
        .sendEmail(action.payload.name, action.payload.email, action.payload.body)
        .pipe(
          map((value: any) => {
            this.angularMaterialService.openSnackBar('Ваше письмо отправлено', 'success');
            return new SendEmailSuccessAction(value);
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );

}
