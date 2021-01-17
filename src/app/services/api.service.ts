import { Injectable, Inject } from '@angular/core';
import {HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  public getAllItem() {
    return this.http.get(`/api/search/all`);
  }

  public getAllNews() {
    return this.http.get(`/api/news/all`);
  }

  public getAllLogs() {
    return this.http.get(`/api/logs/all`);
  }

  public getAllItemByPage(pageNum, pageSize) {
    const params = new HttpParams()
      .set('pageNum', pageNum)
      .set('pageSize', pageSize);
    return this.http.get(`/api/search/page`, {params});
  }

  public getItemById(id: any) {
    return this.http.get(`/api/search/${id}`);
  }

  public addItemToTable(name, code, manuscript, info, bibliography) {

    const item = {name, code, manuscript, info, bibliography};

    return this.http.post(`/api/search/save`, item);
  }

  public deteleFromTable(id: any) {
    return this.http.post(`/api/search/item/${id}`, {});
  }

  public editRow(id: any, name, code, manuscript, info, bibliography) {
    const item = {name, code, manuscript, info, bibliography};
    return this.http.post(`/api/search/item/${id}/edit`, item);
  }

  public authorization(email: string, password: string) {
    const user = {email, password};
    return this.http.post(`/api/auth/login`, user);
  }

  public registration(email: string, password: string) {
    const user = {email, password};
    return this.http.post(`/api/auth/register`, user);
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public redirectAfterLogin(url: string) {
    this.router.navigateByUrl(url);
  }

  public redirectAfterLogout() {
    this.router.navigateByUrl('/login');
  }

  public setLocalStorageItem(itemTitle: string, itemName: string) {
    localStorage.setItem(itemTitle, itemName);
  }

  public isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  public getItemByFieldSearch(name: string, code: string, manuscript: string, info: string, bibliography: string) {
    const search = {name, code, manuscript, info, bibliography}

    return this.http.post(`/api/search/query`, search);
  }

  public getItemByFieldSearchSimple(world: string) {
    const search = {world}
    return this.http.post(`/api/search/query-simple`, search);
  }

  public sendEmail(name: string, email: string, body: string) {
    const bodyEmail = {name, email, body}
    return this.http.post(`/api/contact`, bodyEmail);
  }

}
