// Debounce & Throttling

// const btn = document.querySelector('.increment_btn');
// const btnPress = document.querySelector('.increment_pressed');
// const count = document.querySelector('.increment_count');

// var triggerCount = 0;
// var pressedCount = 0;

// const debouncedCount = _.debounce(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 800);

// btn.addEventListener('click', () => {
//   btnPress.innerHTML = ++pressedCount;

//   debouncedCount();
// });

// const btn = document.querySelector('.increment_btn');
// const btnPress = document.querySelector('.increment_pressed');
// const count = document.querySelector('.increment_count');

// var triggerCount = 0;
// var pressedCount = 0;

// const start = new Date().getTime();

// var throttled = _.throttle(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 1000);

// btn.addEventListener('click', () => {
//   btnPress.innerHTML = pressedCount++;
//   const now = new Date().getTime();
//   const seconds = (now - start) / 1000;
//   console.log(seconds.toFixed());
//   throttled();
// });

// Debounce Polyfill

// const btn = document.querySelector('.increment_btn');
// const btnPress = document.querySelector('.increment_pressed');
// const count = document.querySelector('.increment_count');

// var triggerCount = 0;
// var pressedCount = 0;

// const myDebounce = function (cb, d) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, d);
//   };
// };

// const debouncedCount = myDebounce(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 800);

// btn.addEventListener('click', () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount();
// });

//Throttle Polyfill

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_count');

var triggerCount = 0;
var pressedCount = 0;

const start = new Date().getTime();

const myThrottle = function (cb, d) {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

var throttled = _.throttle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 1000);

btn.addEventListener('click', () => {
  btnPress.innerHTML = pressedCount++;
  const now = new Date().getTime();
  const seconds = (now - start) / 1000;
  console.log(seconds.toFixed());
  throttled();
});
