import { GetAllNewsAction } from './../../../store/actions/news';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRootNews from '../../../store/reducers/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.styl']
})
export class NewsComponent implements OnInit {

  public news: any = [];

  constructor(
    private store: Store<object>,
  ) { }

  ngOnInit(): void {

    this.store.select(fromRootNews.getNewsSelector).subscribe(
      (value) => {

        this.news = value;

      }
    );

    this.store.dispatch(new GetAllNewsAction());
  }

}
