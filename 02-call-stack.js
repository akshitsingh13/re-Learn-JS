// Create three nested functions and demonstrate their execution order.

function firstCall() {
  console.log("I was called first hehe");
  secondCall();
  console.log("I went last but why :(");
}
function secondCall() {
  console.log("I was called second lol");
  thirdCall();
  console.log("When i went does it really matter when i am in btw");
}
function thirdCall() {
  console.log("I might have come last but will go first");
}

firstCall();

//Write a recursive countdown function that prints 10 to 1.

function printNum(count) {
  if (count == 11) return;
  console.log(count + " ");
  printNum(count + 1);
}

printNum(1);

// Write a recursive factorial function.
function recursive(a) {
  if (a == 1 || a == 0) return 1;
  else return a * recursive(a - 1);
}
console.log(recursive(5));
