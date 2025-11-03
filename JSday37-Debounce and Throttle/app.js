// 1. BASIC DEBOUNCE
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
function logSearch(query) {
  console.log("Searching for:", query, "at", new Date().toLocaleTimeString());
}
const debouncedSearch = debounce(logSearch, 2000);
debouncedSearch("H");
setTimeout(() => debouncedSearch("He"), 500);
setTimeout(() => debouncedSearch("Hel"), 1000);
setTimeout(() => debouncedSearch("Hell"), 1500);
setTimeout(() => debouncedSearch("Hello"), 2500);
// 2. LEADING DEBOUNCE
function debounceLeading(fn, delay) {
  let timer;
  return function (...args) {
    const callNow = !timer;
    clearTimeout(timer);
    timer = setTimeout(() => (timer = null), delay);
    if (callNow) fn(...args);
  };
}
function logTyping(text) {
  console.log("Typing started:", text, "at", new Date().toLocaleTimeString());
}
const debouncedTyping = debounceLeading(logTyping, 2000);
debouncedTyping("H");
setTimeout(() => debouncedTyping("He"), 500);
setTimeout(() => debouncedTyping("Hel"), 1000);
setTimeout(() => debouncedTyping("Hell"), 1500);
setTimeout(() => debouncedTyping("Hello"), 2500);
// 3. TRAILING THROTTLING
function throttleTrailing(fn, delay) {
  let timerId;
  let lastArgs;
  return function (...args) {
    lastArgs = args;
    if (!timerId) {
      timerId = setTimeout(() => {
        fn(...lastArgs);
        timerId = null;
      }, delay);
    }
  };
}
function logScroll() {
  console.log("Trailing throttle scroll:", new Date().toLocaleTimeString());
}
const throttledScroll = throttleTrailing(logScroll, 2000);
throttledScroll();
throttledScroll();
throttledScroll();
// 4. LEADING THROTTLING
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    fn(...args); 
  };
}
function logMessage(msg) {
  console.log("Message:", msg, "at", new Date().toLocaleTimeString());
}
const throttledLog = throttle(logMessage, 2000);

throttledLog("Hi");
setTimeout(() => throttledLog("Hello"), 500);
setTimeout(() => throttledLog("How are you?"), 1000);
setTimeout(() => throttledLog("After 2s again!"), 2100);
setTimeout(() => throttledLog("After 4s again!"), 4200);

// 5. TRAILING DEBOUNCE

function debounceTrailing(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const logInput = debounceTrailing((text) => {
  console.log(
    "Trailing debounce input:",
    text,
    "at",
    new Date().toLocaleTimeString()
  );
}, 1500);

logInput("User typing H");
setTimeout(() => logInput("User typing He"), 500);
setTimeout(() => logInput("User typing Hel"), 1000);
setTimeout(() => logInput("User typing Hello"), 2500);