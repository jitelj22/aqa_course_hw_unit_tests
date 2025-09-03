//1
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log("Called after 2 seconds"));

//2
const promise1 = new Promise((resolve) => {
  resolve(1);
});

promise1.then((result) => {
  console.log("Promise1 resolved with:", result);
});

//3
const promise2 = new Promise((_, reject) => {
    reject("Promise2 rejected");
    });
promise2.catch((error) => {
    console.log("Promise2 rejected with:", error);
});

//4
function promiseNumber(num) {
  return new Promise((resolve) => {
    resolve(num);   
  });   
}

//5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((res, idx) => {
      console.log(`Promise.all result ${idx + 1}:`, res);
    });
  });

//6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((res, idx) => {
      console.log(`Promise.allSettled result ${idx + 1}: status=${res.status}, value=${res.value}`);
    });
  });

//7
async function runAll() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((res, idx) => {
      console.log(`Async Promise.all result ${idx + 1}:`, res);
    });
  } catch (error) {
    console.log("Async Promise.all error:", error);
  }

  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((res, idx) => {
      console.log(`Async Promise.allSettled result ${idx + 1}: status=${res.status}, value=${res.value}`);
    });
  } catch (error) {
    console.log("Async Promise.allSettled error:", error);
  }
}

runAll();