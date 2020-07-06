import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintComponent } from './hint/hint.component';
import { DeleteComponent } from './delete/delete.component';
import { MatButtonModule } from '@angular/material/button';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HintComponent,
    DeleteComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule

  ],
  exports: [
    HintComponent,
    EditComponent,
    AddComponent,
  ],
  entryComponents: [
    EditComponent,
    AddComponent
  ],
})
export class ModalsModule { }
