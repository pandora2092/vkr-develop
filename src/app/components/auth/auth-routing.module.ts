import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
    path: 'login', //auth for layout
    component: LoginComponent,
    // children: [
    //   { path: '', redirectTo: 'login', pathMatch: 'full'},
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent },
    // ]
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
export class AuthRoutingModule { }
