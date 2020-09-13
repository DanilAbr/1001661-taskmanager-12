import AbstractView from './abstract';

const createTaskList = () => {
  return `<div class="board__tasks"></div>`;
};

export default class TaskList extends AbstractView {
  getTemplate() {
    return createTaskList();
  }
}
