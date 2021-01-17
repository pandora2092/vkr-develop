import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from 'src/app/store/actions/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public redirectUrl: string = '/';

  constructor(private store: Store<object>) { }

  ngOnInit(): void {
  }

  public auth() {
    this.store.dispatch(new LoginAction(this.email, this.password, this.redirectUrl));
  }

}
