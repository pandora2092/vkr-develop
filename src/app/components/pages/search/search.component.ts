import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GetAllCardAction, GetCardByFieldsSimpleAction, GetCardByFieldsAction } from '../../../store/actions/list-card';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/list-card';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HintComponent } from '../../modals/hint/hint.component';
import { DeleteComponent } from '../../modals/delete/delete.component';
import { EditComponent } from '../../modals/edit/edit.component';
import { AddComponent } from '../../modals/add/add.component';

export interface TableElement {
  name: string;
  code: string;
  manuscript: string;
  info: string;
  bibliography: string;
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})

export class SearchComponent implements OnInit {

  @ViewChild('btnExtend') btnExtend: ElementRef;
  public pageSize;
  public pageIndex;

  public search: string;
  public searchName: string = '';
  public searchCode: string = '';
  public searchManuscript: string = '';
  public searchInfo: string = '';
  public searchBibliography: string = '';
  public countSimpleResult: number = 0;
  public countResult: number = 0;


  public elementData = [];
  public table: any;
  displayedColumns: string[] = ['name', 'code', 'manuscript', 'info', 'bibliography', 'edit', 'delete'];
  dataSource = new MatTableDataSource<TableElement>(this.elementData);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(
    private store: Store<object>,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.gettUnits).subscribe(
      (value) => {
        if (this.isLocalStorage('pageSize')) this.paginator.pageSize = this.getLocalStorage('pageSize');
        if (this.isLocalStorage('pageIndex')) this.paginator.pageIndex = this.getLocalStorage('pageIndex');
        this.elementData = value;
        this.paginator._intl.itemsPerPageLabel = 'Показать по';
        this.paginator._intl.previousPageLabel = 'Предыдущая страница';
        this.paginator._intl.nextPageLabel = 'Следующая страница';
        this.paginator._intl.firstPageLabel = 'Первая страница';
        this.paginator._intl.lastPageLabel = 'Последняя страница';
        this.paginator._intl.getRangeLabel = dutchRangeLabel;

        this.dataSource = new MatTableDataSource<TableElement>(this.elementData);
        this.dataSource.paginator = this.paginator;
      }
    );

    this.store.select(fromRoot.gettSearchSimpleUnits).subscribe(
      (value) => {
        this.elementData = value;
        this.countSimpleResult = this.elementData.length;
        this.dataSource = new MatTableDataSource<TableElement>(this.elementData);
        this.dataSource.paginator = this.paginator;
      }
    );

    this.store.select(fromRoot.gettSearchUnits).subscribe(
      (value) => {
        this.elementData = value;
        this.countResult = this.elementData.length;
        this.dataSource = new MatTableDataSource<TableElement>(this.elementData);
        this.dataSource.paginator = this.paginator;
      }
    );


    this.store.dispatch(new GetAllCardAction());
  }

  public deleteRow(id: any) {
    this.dialog.open(DeleteComponent, {
      panelClass: 'main',
      data: { id },
    });
  }

  public getLocalStorage(item: string) {
    return +localStorage.getItem(item);
  }

  public isLocalStorage(item: string) {
    return !!localStorage.getItem(item);
  }


  public editRow(id: any) {
    this.dialog.open(EditComponent, {
      panelClass: 'main',
      data: { id },
    });
  }

  public addRow(id: any) {
    this.dialog.open(AddComponent, {
      panelClass: 'main',
    });
  }

  public searcExtendOpen() {
    let element = document.getElementById('btn-extend');
    element.classList.toggle('display');
  }

  public pageChange(e) {
    localStorage.setItem('pageSize', e.pageSize);
    localStorage.setItem('pageIndex', e.pageIndex);

  }

  public searchSimple() {
    this.store.dispatch(new GetCardByFieldsSimpleAction(this.search));
  }

  public searchExtend() {
    this.store.dispatch(new GetCardByFieldsAction(this.searchName, this.searchCode, this.searchManuscript, this.searchInfo, this.searchBibliography));
  }

  public clearSimple() {
    this.search = '';
    this.countSimpleResult = 0;
    this.store.dispatch(new GetAllCardAction());
  }

  public clearExtend() {
    this.countResult = 0;
    this.searchName = '';
    this.searchCode = '';
    this.searchManuscript = '';
    this.searchInfo = '';
    this.searchBibliography = '';
    this.store.dispatch(new GetAllCardAction());
  }

  public hintSimple() {
    this.dialog.open(HintComponent, {
      panelClass: 'main',
    });
  }

}
