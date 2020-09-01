import {createElement} from "../utils.js";

const createTaskList = () => {
  return `<div class="board__tasks"></div>`;
};

export default class TaskList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTaskList();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}
