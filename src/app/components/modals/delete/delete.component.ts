import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteCardByIdAction } from 'src/app/store/actions/list-card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.styl']
})
export class DeleteComponent implements OnInit {

  constructor(
    private store: Store<object>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteComponent>,) { }

  ngOnInit(): void {
  }

  public deleteRow() {
    this.store.dispatch(new DeleteCardByIdAction(this.data.id));
  }

}
