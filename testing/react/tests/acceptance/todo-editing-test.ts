import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect } from 'chai';
import { setupApplicationForTesting } from '../helpers'
import {
  interactor,
  text,
  clickable,
  fillable,
  blurrable
} from '@bigtest/interactor';

@interactor class TodoMVCPage {
  headingText = text('h1');
  clickFirstTodo = clickable('ul.todo-list li:first-child');
  fillName = fillable('ul.todo-list li:first-child input');
}

describe('Acceptance | todo editing', () => {
  let todo = new TodoMVCPage();

  setupApplicationForTesting();

  it('renders', () => {
    expect(todo.headingText).to.equal('todos');
  });
  //
  // beforeEach(async () => {
  //   app = await setupAppForTesting(Application);
  // });
  //
  // it('the initial todo can be edited', () => {
  //   const page = new TodoMVCPage();
  //     page.clickFirstTodo()
  //     .run();
  //
  //   const edits = app.find('.editable');
  //
  //   const classes = edits[0].classList;
  //
  //   expect(classes).to.contain('editing');
  // });
  //
  // it('the initial todo can have the text change', () => {
  //
  // });
  //
  // it('the initial todo can be completed', () => {
  //
  // });
});
