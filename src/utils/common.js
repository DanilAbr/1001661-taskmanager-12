export const getRandomInteger = (a = 0, b = 1) =>
  Math.floor(Math.min(a, b) + Math.random() * (Math.max(a, b) - Math.min(a, b) + 1));
