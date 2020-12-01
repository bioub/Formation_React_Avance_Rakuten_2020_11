const t1 = [1, 2, 3]
const t2 = [1, 2, 3]

console.log(t1 === t2); // false

const t3 = t1; // affecte la référence
console.log(t1 === t3); // true

const m1 = [1, 2, 3];
const b1 = m1;

m1.push(4);
const b2 = m1;

console.log(b1 === b2); // true

