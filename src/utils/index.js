export function randomNumberGenerator(min, max) {
  return min + Math.round(Math.random() * max);
}

export function randomColorGenerator() {
  console.log("rondomColorGenerator visited")
  return '#xxxxxx'.replace(/x/g, () => ((Math.random() * 16) | 0).toString(16));
}
