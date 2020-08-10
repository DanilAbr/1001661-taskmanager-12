import {createSiteMenuTemplate} from './view/site-menu.js';
import {createSiteFiltersElement} from './view/site-filters.js';
import {createBoardTempalte} from './view/board.js';
import {createTaskTemplate} from './view/task.js';
import {createTaskEditTemplate as createTaskEditTemplate} from './view/task-edit.js';
import {createButtonLoadMoreTemplate} from './view/load-button';
import {render} from './util.js';
import {generateTask} from "./mock/task.js";

const TASK_COUNT = 4;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createSiteFiltersElement());
render(siteMainElement, createBoardTempalte());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(tasks[0]));

for (let i = 1; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]));
}

render(boardElement, createButtonLoadMoreTemplate());
