import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesContainerComponent } from './pages-container/pages-container.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [{
    path: '',
    component: PagesContainerComponent,
    children: [
      { path: '', component: MainScreenComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'search', component: SearchComponent },
      { path: 'news', component: NewsComponent }
    ],
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class PagesRoutingModule { }
