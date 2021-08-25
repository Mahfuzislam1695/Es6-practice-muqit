const ages = [12, 15, 13, 17, 20];
const ages2 = [24, 25, 26, 28, 21];
const ages3 = [34, 43, 43 ,32, 45];

const allAges = [...ages, ...ages2, ...ages3]
console.log(allAges);

const takaPoisa = [656, 546, 764];
const maximum = Math.max(...takaPoisa);

console.log(maximum);