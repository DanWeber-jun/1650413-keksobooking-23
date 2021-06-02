const getSomeInt = ((min,max) => {
  if (min < 0 || max < 0 ) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max-min];
  }
  return Math.random(Math.random() * (max - min)) + min;
});

getSomeInt(0, 100);

const getSomeNumber = ((min, max) => {
  if (min < 0 || max < 0 ) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max-min];
  }
  return Math.random() * (max - min) + min.toFixed();
});

getSomeNumber(0, 100);
