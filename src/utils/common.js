const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const updateItem = (array, update) => {
  const index = array.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return array;
  }

  return [
    ...array.slice(0, index),
    update,
    ...array.slice(index + 1)
  ];
};

export {getRandomInteger, updateItem};
