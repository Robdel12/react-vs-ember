import Component from '@ember/component';
import { service } from '@ember-decorators/service';
import { action, computed } from '@ember-decorators/object';
import { alias, equal, filterBy, gt } from '@ember-decorators/object/computed';

import Todo from 'example-app/data/models/todo';
import TodosService from 'example-app/services/todos';

export default class extends Component {
  @service('todos') todoManager!: TodosService;
  @service router;

  @alias('router.currentRouteName') routeName!: string;
  @equal('routeName', 'index') showAll!: boolean;
  @equal('routeName', 'uncompleted') showActive!: boolean;
  @equal('routeName', 'completed') showCompleted!: boolean;

  @filterBy('todos', 'completed', true) completedTodos!: Todo[];

  @alias('todos.length') todosCount!: number;

  @gt('todosCount', 0) showClearButton!: boolean;

  @computed('todosCount')
  get itemWord() {
    return this.todosCount > 1 ? 'items' : 'item';
  }

  @action
  clearCompleted() {
    this.todoManager.clearCompleted();
  }
}
