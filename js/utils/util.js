const shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getRandomNumber = (min, max) => Math.random(Math.random() * (max - min)) + min;

const getSomeFloat = (min, max, digit) => {
  if (min < 0 || max < 0 ) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max,min];
  }
  return (Math.random() * (max - min) + min).toFixed(digit);
};

const getSomeInt = (min,max) => {
  if (min < 0 || max < 0 ) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max,min];
  }
  return Math.random(Math.random() * (max - min)) + min;
};

export {shuffleArray, getRandomNumber, getSomeFloat, getSomeInt};
