import { GetAllLogsAction } from './../../../store/actions/logs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRootLogs from '../../../store/reducers/logs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface TableElement {
  dateTime: string;
  action: string;
  remoteAddress: string
}


const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 из ${length}`; }
  length = Math.max(length, 0);
  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
  return `${startIndex + 1} - ${endIndex} из ${length}`;
}

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.styl']
})
export class LogsComponent implements OnInit {

  public logs: any = [];
  public elementData = [];
  displayedColumns: string[] = ['dateTime', 'action', 'remoteAddress'];
  dataSource = new MatTableDataSource<TableElement>(this.elementData);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private store: Store<object>,) { }

  ngOnInit(): void {

    this.store.select(fromRootLogs.getLogsSelector).subscribe(
      (value) => {

        if (this.isLocalStorage('pageSizeLog')) this.paginator.pageSize = this.getLocalStorage('pageSizeLog');
        if (this.isLocalStorage('pageIndexLog')) this.paginator.pageIndex = this.getLocalStorage('pageIndexLog');


        this.elementData = value;
        this.paginator._intl.itemsPerPageLabel = 'Показать по';
        this.paginator._intl.previousPageLabel = 'Предыдущая страница';
        this.paginator._intl.nextPageLabel = 'Следующая страница';
        this.paginator._intl.firstPageLabel = 'Первая страница';
        this.paginator._intl.lastPageLabel = 'Последняя страница';
        this.paginator._intl.getRangeLabel = dutchRangeLabel;
        this.dataSource = new MatTableDataSource<TableElement>(this.elementData);
        this.dataSource.paginator = this.paginator;

        console.log(this.logs)

      }
    );

    this.store.dispatch(new GetAllLogsAction());

  }

  public pageChange(e) {
    localStorage.setItem('pageSizeLog', e.pageSize);
    localStorage.setItem('pageIndexLog', e.pageIndex);

  }

  public getLocalStorage(item: string) {
    return +localStorage.getItem(item);
  }

  public isLocalStorage(item: string) {
    return !!localStorage.getItem(item);
  }

}
