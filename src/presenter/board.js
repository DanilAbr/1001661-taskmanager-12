import BoardView from './view/board.js';
import SortView from './view/sort.js';
import TaskListView from './view/task-list.js';
import NoTaskView from './view/no-task.js';
import TaskView from './view/task.js';
import TaskEditView from './view/task-edit.js';
import LoadMoreButtonView from './view/load-more-button';
import {render, RenderPosition} from './utils/render.js';

export default class Board {
  constructor(boardContainer) {
    this._boardComponent = boardContainer;

    this._boardComponent = new BoardView();
    this._sortComponent = new SortView();
    this._taskListComponent = new TaskListView();
    this._noTaskComponent = new NoTaskView();
  }

  init(boardTask) {
    this._boardTasks = boardTasks.slice();
  }

  _renderSort() {

  }

  _renderTask() {

  }

  _renderTasks() {

  }

  _renderNoTasks() {

  }

  _renderLoadMoreButton() {

  }

  _renderBoard() {

  }
}
