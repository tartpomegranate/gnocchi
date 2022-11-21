export const arraySplit = (array, isValid) => {
  const pass = [];
  const fail = [];

  array.forEach((element) => {
    if (isValid(element)) {
      pass.push(element);
    } else {
      fail.push(element);
    }
  });

  return [pass, fail];
};
