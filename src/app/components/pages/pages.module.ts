import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesContainerComponent } from './pages-container/pages-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MenuModule } from '../menu/menu.module';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    ContactComponent,
    PagesContainerComponent,
    PageNotFoundComponent,
    SearchComponent,
    MainScreenComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatIconModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
