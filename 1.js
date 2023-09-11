const obj = { a: "b", c: "d", e: "f" };

function swap(obj) {
  const swapObj = {};
  for (const i in obj) {
    swapObj[obj[i]] = i;
  }
  return swapObj;
}

const swapObj = swap(obj);
console.log(swapObj);
