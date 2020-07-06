import { AuthGuard } from './../../quards/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [{
    path: 'admin',
    canActivate: [ AuthGuard ],
    component: AdminLayoutComponent,
    children: [
    ]
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
    AuthGuard,
  ]
})
export class AdminRoutingModule { }
