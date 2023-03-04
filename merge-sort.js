const comapreValue = (v1, v2) => {
  if (v1 < v2) {
    return 1;
  }
  if (v1 > v2) {
    return 2;
  }
  if (v1 == v2) {
    return 0;
  }
};

const merge = (left, right, arr = []) => {
  const arrLen = left.length + right.length;

  for (let i = 0; i < arrLen; i++) {
    if (left.length === 0) {
      arr.push(right.shift());
      continue;
    }
    if (right.length === 0) {
      arr.push(left.shift());
      continue;
    }

    const comp = comapreValue(left[0], right[0]);
    if (comp == 1) {
      arr.push(left.shift());
    }
    if (comp == 2) {
      arr.push(right.shift());
    }
    if (comp == 0) {
      arr.push(left.shift());
    }
  }

  return arr;
};

const mergSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const fh = mergSort(arr.slice(0, Math.ceil(arr.length / 2)));
  const sh = mergSort(arr.slice(Math.ceil(arr.length / 2)));
  console.log(`first:${fh} , second:${sh}`);
  return merge(fh, sh);
};

const ex = [9, 8, 6, 28, 1, 3, 15, 10];
const a = mergSort(ex);
console.log(a);
