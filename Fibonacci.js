const fab = (num) => {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    const x = arr[i - 1] + arr[i - 2];
    arr.push(x);
  }
  return arr;
};

const fibRec = (num, arr = [0, 1]) => (num <= 2
  ? arr
  : fibRec(num - 1, arr.concat(arr[arr.length - 1] + arr[arr.length - 2])));

console.log(fibRec(5));
