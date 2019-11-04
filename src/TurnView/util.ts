export function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function random(min: number, max: number) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

export function randomColor(min = 20, max = 200) {
  return `rgb(${random(min, max)},${random(min, max)},${random(min, max)})`;
}
