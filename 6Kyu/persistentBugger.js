const persistence = number => {
  let array = String(number).split("").map(e => Number(e));
  let count = 0;
  while(array.length != 1) {
    array = array.reduce((a, b) => a * b);
    array = String(array).split("").map(e => Number(e));
    count += 1;
  }
  return count;
}