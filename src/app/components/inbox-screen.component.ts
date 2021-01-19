import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {TaskState, TaskStateModel} from 'src/app/state/task.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-inbox-screen',
  template: `
    <app-pure-inbox-screen [error]="error$ | async"></app-pure-inbox-screen>
  `
})
export class InboxScreenComponent implements OnInit {
  @Select(TaskState.getError) error$: Observable<any>;

  constructor() {}

  ngOnInit(): void {}
}
