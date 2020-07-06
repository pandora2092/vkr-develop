import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  private toUrl;

  constructor(private authService: ApiService, private router: Router) {}

  canActivate(route, state) {
    this.toUrl = state.url;

    if (this.authService.isLoggedIn()) {
    	return true;
    }

    this.router.navigate(['/login', {redirect: this.toUrl}]);
    return false;
  }
}
