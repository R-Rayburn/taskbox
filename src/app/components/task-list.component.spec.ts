import {render} from '@testing-library/angular';
import {TaskListComponent} from 'src/app/components/task-list.component';
import {TaskComponent} from 'src/app/components/task.component';
import {withPinnedTasksData} from 'src/app/components/task-list.stories';

describe('TaskList component', () => {
  it('renders pinned tasks at the start of the list', async() => {
    const mockedActions = jest.fn();
    const tree = await render(TaskListComponent, {
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
