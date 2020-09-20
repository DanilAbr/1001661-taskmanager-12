const Color = {
  BLACK: `black`,
  YELLOW: `yellow`,
  BLUE: `blue`,
  GREEN: `green`,
  PINK: `pink`
};

const COLORS = Object.values(Color);

const SortType = {
  DEFAULT: `default`,
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`
};

const UserAction = {
  UPDATE_TASK: `UPDATE_TASK`,
  ADD_TASK: `ADD_TASK`,
  DELETE_TASK: `DELETE_TASK`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

const FilterType = {
  ALL: `ALL`,
  OVERDUE: `OVERDUE`,
  TODAY: `TODAY`,
  FAVORITES: `FAVORITES`,
  REPEATING: `REPEATING`,
  ARCHIVE: `ARCHIVE`
};

const MenuItem = {
  ADD_NEW_TASK: `ADD_NEW_TASK`,
  TASKS: `TASKS`,
  STATISTICS: `STATISTICS`
};

export {
  Color,
  COLORS,
  SortType,
  UpdateType,
  UserAction,
  FilterType,
  MenuItem
};
