import {render} from '@testing-library/angular';
import {TaskComponent} from 'src/app/components/task.component';
import {withPinnedTasksData} from 'src/app/components/pure-task-list.stories';
import {PureTaskListComponent} from 'src/app/components/pure-task-list.component';

describe('PureTaskList component', () => {
  it('renders pinned tasks at the start of the list', async() => {
    const mockedActions = jest.fn();
    const tree = await render(PureTaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        tasks: withPinnedTasksData,
        loading: false,
        onPinTask: {
          emit: mockedActions
        } as any
      }
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('6');
  });
});
