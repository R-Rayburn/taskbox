import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {TaskState} from 'src/app/state/task.state';
import {TaskComponent} from 'src/app/components/task.component';
import {TaskListComponent} from 'src/app/components/task-list.component';
import {PureTaskListComponent} from 'src/app/components/pure-task-list.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TaskState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: []
})
export class TaskModule {}
