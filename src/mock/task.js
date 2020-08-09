const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElementOfArray = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ];

  return getRandomElementOfArray(descriptions);
};

export const generateTask = () => {
  return {
    descritpion: generateDescription(),
    dueDate: null,
    repeating: {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    },
    color: `black`,
    isArchive: false,
    isFavorite: false
  };
};
