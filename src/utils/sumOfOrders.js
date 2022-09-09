export const sumOfOrderObjects = (obj) => {
  return Object.keys(obj)
    .map((num) => parseInt(obj[num]))
    .reduce((result, number) => result + number);
};
