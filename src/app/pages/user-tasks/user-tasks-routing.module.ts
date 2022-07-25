import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTasksComponent }   from './user-tasks.component';

const routes: Routes = [
  {
    path: 'user-tasks',
    component: UserTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTasksRoutingModule { }
