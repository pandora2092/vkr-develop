import { AddCardAction } from '../../../store/actions/list-card';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.styl']
})
export class AddComponent implements OnInit {

  @ViewChild('addForm') addForm;

  public addName = '';
  public addCode = '';
  public addManuscript = '';
  public addInfo = '';
  public addBibliography = '';

  constructor(private store: Store<object>) { }

  ngOnInit() {
  }

  public addCard() {
    this.store.dispatch(new AddCardAction(this.addName, this.addCode, this.addManuscript, this.addInfo, this.addBibliography));
  }

}
