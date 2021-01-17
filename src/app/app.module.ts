import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { CardListEffects } from './store/effects/list-card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthModule } from './components/auth/auth.module';
import { PagesModule } from './components/pages/pages.module';
import { MenuModule } from './components/menu/menu.module';
import { AuthEffects } from './store/effects/auth';
import { AdminModule } from './components/admin/admin.module';
import { ContactEffects } from './store/effects/contact';
import { ModalsModule } from './components/modals/modals.module';
import { NewsListEffects } from './store/effects/news';
import { LogsListEffects } from './store/effects/logs';
import { httpInterceptorProviders } from './services/http.interceptor.providers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers()),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      CardListEffects,
      NewsListEffects,
      LogsListEffects,
      AuthEffects,
      ContactEffects
    ]),
    AuthModule,
    ModalsModule,
    AdminModule,
    PagesModule,
    MenuModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
  ],
  entryComponents: [
  ],
  providers: [
    { provide: MatDialogRef, useValue: {}},
    { provide: MAT_DIALOG_DATA, useValue: []},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
