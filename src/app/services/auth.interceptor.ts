import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { mergeMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  public token = localStorage.getItem('token');

  constructor(
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers:
        req.headers
            //.set('authorization', this.token)
            //.set('Content-Type', `application/x-www-form-urlencoded`)
      });


      return next.handle(authReq);

  }
}
