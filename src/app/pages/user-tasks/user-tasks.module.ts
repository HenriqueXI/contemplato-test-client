import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTasksRoutingModule } from './user-tasks-routing.module';
import { UserTasksComponent }     from './user-tasks.component';
import { MatListModule }          from '@angular/material/list';
import { MatInputModule }         from '@angular/material/input';
import { MatIconModule }          from '@angular/material/icon';


@NgModule({
  declarations: [UserTasksComponent],
  imports: [
    CommonModule,
    UserTasksRoutingModule,
    MatListModule,
    MatInputModule,
    MatIconModule
  ],
})
export class UserTasksModule {}
