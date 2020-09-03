import AbstractView from './abstract.js';

const createSortTemplate = () => {
  return `<div class="board__filter-list">
            <a href="#" class="board__filter" data-sort-type="${SortType.DEFAULT}">SORT BY DEFAULT</a>
            <a href="#" class="board__filter" data-sort-type="${SortType.DEFAULT}">SORT BY DATE up</a>
            <a href="#" class="board__filter" data-sort-type="${SortType.DEFAULT}">SORT BY DATE down</a>
          </div>`;
};

export default class Sort extends AbstractView {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback._sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
