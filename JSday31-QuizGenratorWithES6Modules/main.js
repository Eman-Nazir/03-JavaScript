import { quotes } from './modules/quotes.js';
import { getRandomQuote } from './modules/utils.js';

const quoteElement = document.getElementById('quote');
const btn = document.getElementById('generateBtn');

btn.addEventListener('click', () => {
  const quote = getRandomQuote(quotes);
//   // You wrote:
// getRandomQuote(quotes);

// // JavaScript thinks like:
// getRandomQuote([
//    "Do something today that your future self will thank you for.",
//   "Success doesn’t just find you. You have to go out and get it.",
//   "Don’t wait for opportunity. Create it.",
//   "Push yourself, because no one else is going to do it for you.",
//   "Sometimes later becomes never. Do it now.",
// ]);

  quoteElement.textContent = quote;
});
