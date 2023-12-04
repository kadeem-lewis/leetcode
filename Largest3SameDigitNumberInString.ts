function largestGoodInteger(num: string): string {
  let finalArray: string[] = [];
  for (let i = 0; i < num.length; i++) {
    if (!finalArray.includes(num[i].repeat(3))) {
      const value = num.match(num[i].repeat(3));
      if (value !== null) finalArray.push(value[0]);
    }
  }
  finalArray = finalArray.sort();
  return finalArray.length ? finalArray[finalArray.length - 1] : "";
}

console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("2300019"));
console.log(largestGoodInteger("42352338"));
console.log(largestGoodInteger("777222333444555888"));

//current implementation only checks if the number appears 3 times and not 3 times in a row
