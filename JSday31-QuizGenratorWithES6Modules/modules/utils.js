export function getRandomQuote(data) {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}



// export const getRandomQuote = (data) => {
//   const index = Math.floor(Math.random() * data.length);
//   return data[index];
// };



// export function getRandomQuote(data) {
//   // Now:
//   // data = [
//   //   "Be yourself;...",
//   //   "Push yourself,...",
//   //   "Dream big..."
//   // ]

//   const index = Math.floor(Math.random() * data.length);
//   return data[index]; // Example return: "Push yourself..."
// }
