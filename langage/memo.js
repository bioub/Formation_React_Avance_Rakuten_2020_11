const { memoize, isEqual } = require("lodash");

const nbs = (new Array(1_000_000)).fill(0).map(() => Math.random());

function filterLower(arrayNbs, val) {
  return arrayNbs.filter((nb) => nb < val).length;
}

const filterLowerMemo = memoize(filterLower);

// function memoize(fct) {
//   let cache;
//   let params;
//   return (...nextParams) => {
//     if (isEqual(params, nextParams)) {
//       return cache;
//     } else {
//       params = nextParams;
//       cache = fct(...param);
//     }
//   }
// }

console.time('filterLower');
console.log(filterLowerMemo(nbs, 0.5));
console.timeEnd('filterLower');

console.time('filterLower');
console.log(filterLowerMemo(nbs, 0.5));
console.timeEnd('filterLower');

console.time('filterLower');
console.log(filterLowerMemo(nbs, 0.5));
console.timeEnd('filterLower');

console.time('filterLower');
console.log(filterLowerMemo(nbs, 0.5));
console.timeEnd('filterLower');

console.time('filterLower');
console.log(filterLowerMemo(nbs, 0.5));
console.timeEnd('filterLower');