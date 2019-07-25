import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export enum URL {
  LOGIN = 'log-in',
  SIGNUP = 'sign-up'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: URL.LOGIN,
    pathMatch: 'full'
  },
  {
    path: URL.LOGIN,
    loadChildren: './log-in/log-in.module#LogInModule'
  },
  {
    path: URL.SIGNUP,
    loadChildren: './sign-up/sign-up.module#SignUpModule'
  },
  {
    path: '**',
    redirectTo: URL.SIGNUP,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
