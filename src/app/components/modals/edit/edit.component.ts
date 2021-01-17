import { EditCardByIdAction, GetCardByIdAction } from '../../../store/actions/list-card';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/list-card';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl']
})
export class EditComponent implements OnInit {

  public editName = '';
  public editCode = '';
  public editManuscript = '';
  public editInfo = '';
  public editBibliography = '';
  public editId;
  public row: any;

  constructor(
    private store: Store<object>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {

    this.store.select(fromRoot.gettOneUnits).subscribe(
      (value) => {
        this.editName = value.name;
        this.editCode = value.code;
        this.editManuscript = value.manuscript;
        this.editInfo = value.info;
        this.editBibliography = value.bibliography;
        this.editId = value._id;
      }
    );

    this.store.dispatch(new GetCardByIdAction(this.data.id));
  }

  public editCard(id: any) {
    this.store.dispatch(new EditCardByIdAction(id, this.editName, this.editCode, this.editManuscript, this.editInfo, this.editBibliography));
  }

}
