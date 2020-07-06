import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainMenuComponent,
    AuthMenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    AuthMenuComponent,
    MainMenuComponent
  ]
})
export class MenuModule { }
