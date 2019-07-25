import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in.component';

export const routes: Route[] = [
  {
    path: '',
    component: LogInComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class LogInRoutingModule { }
