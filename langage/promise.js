const fs = require("fs");

// Sync
try {
  const buffer = fs.readFileSync("package.json");
  fs.writeFileSync("package.json.copy", buffer);
  console.log("DONE");
} catch (err) {
  console.log(err);
}

// ^
// |
// |readFileSync xxxxxxxxxxxxxxxxxxxxxxxxx toString - log
// +---------------------------------------20ms-->

// Async (Callback hell, Pyramid of Doom)
fs.readFile("package.json", (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("package.json.copy", buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DONE");
      }
    });
  }
});

// Async (Promise)
fs.promises
  .readFile("package.json")
  .then((buffer) => fs.promises.writeFile("package.json.copy", buffer))
  .then(() => console.log("DONE"))
  .catch((err) => console.log(err));

// Coroutine (bluebird)
// coroutine(function*() {
//   try {
//     const buffer = yield fs.promises.readFile("package.json");
//     yield fs.promises.writeFile("package.json.copy", buffer);
//     console.log("DONE");
//   } catch (err) {
//     console.log(err);
//   }
// });

// Async
(async () => {
  try {
    const buffer = await fs.promises.readFile("package.json");
    await fs.promises.writeFile("package.json.copy", buffer);
    console.log("DONE");
  } catch (err) {
    console.log(err);
  }
})();

// top level await (esnext)
// try {
//   const buffer = await fs.promises.readFile("package.json");
//   await fs.promises.writeFile("package.json.copy", buffer);
//   console.log("DONE");
// } catch (err) {
//   console.log(err);
// }

// pour les cas où le callback est appelé plusieurs
// - async iterator (ES2018)
// - Observable (Angular, redux-observable)
// - Coroutine

// ^
// |                              toString - log
// |readFile - log .............. =>
// +------------------------------24ms----------->
