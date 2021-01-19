import {moduleMetadata} from '@storybook/angular';
import {TaskModule} from 'src/app/components/task.module';
import {PureInboxScreenComponent} from 'src/app/components/pure-inbox-screen.component';
import {NgxsModule, Store} from '@ngxs/store';
import {TaskState} from 'src/app/state/task.state';

export default {
  title: 'PureInboxScreen',
  decorators: [
    moduleMetadata({
      imports: [TaskModule, NgxsModule.forRoot([TaskState])],
      providers: [Store]
    })
  ]
};

export const Default = () => ({
  component: PureInboxScreenComponent
});

export const error = () => ({
  component: PureInboxScreenComponent,
  props: {
    error: true
  }
});
