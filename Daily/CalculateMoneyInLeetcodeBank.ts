//12-6-2023

function totalMoney(n: number): number {
  let totalMoney = 0;
  let previousDay = 0;

  for (let i = 1; i <= n; i++) {
    let additionalInvestment = Math.floor(i / 7);
    if (i % 7 === 1) {
      previousDay = additionalInvestment + 1;
    } else {
      previousDay++;
    }
    totalMoney = totalMoney + previousDay;
  }

  return totalMoney;
}

console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20));

//everything it hits 7, the starting values increases by 1
