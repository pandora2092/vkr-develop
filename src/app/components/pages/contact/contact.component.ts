import { SendEmailAction } from './../../../store/actions/contact';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromContact from '../../../store/reducers/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {

  public name: string;
  public email: string;
  public body: string;

  constructor( private store: Store<object>,) { }

  ngOnInit() {
    this.store.select(fromContact.getResponseSelector).subscribe(
      (value) => {
        this.name = value.name;
        this.email = value.email;
        this.body = value.body;
      }
    );
  }

  public sendEmail() {
    this.store.dispatch(new SendEmailAction(this.name, this.email, this.body));
  }

}
