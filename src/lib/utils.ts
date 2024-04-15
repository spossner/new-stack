export function shuffle<T>(array: T[]) {
  let m = array.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    const t = array[m] as T;
    array[m] = array[i] as T;
    array[i] = t;
  }
  return array;
}
