function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const returnedArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
}
