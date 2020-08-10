const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const render = (container, template, position = `beforeend`) =>
  container.insertAdjacentHTML(position, template);

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate > dueDate.getTime();
};

const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

const isTaskRepeating = (repeating) =>
  Object.values(repeating).some(Boolean);

const humanizeTaskDueDate = (dueDate) =>
  dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});

export {getRandomInteger, render, isTaskExpired, isTaskRepeating, humanizeTaskDueDate, isTaskExpiringToday};
