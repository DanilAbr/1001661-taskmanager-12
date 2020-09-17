import SiteMenuView from './view/site-menu';
import FilterView from './view/filter';
import {generateTask} from './mock/task';
import BoardPresenter from './presenter/board';
import TasksModel from './model/tasks';
import FilterModel from './model/filter';
import {render, RenderPosition} from './utils/render';

const TASK_COUNT = 22;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = [
  {
    type: `all`,
    name: `ALL`,
    count: 0
  }
]

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterModel = new FilterModel();

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const boardPresenter = new BoardPresenter(siteMainElement, tasksModel);

render(siteHeaderElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterView(filters, `all`), RenderPosition.BEFOREEND);

boardPresenter.init();
