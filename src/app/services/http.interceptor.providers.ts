import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './auth.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
];
