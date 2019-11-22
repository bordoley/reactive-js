export const add1 = (x: number): number => x + 1;
export const add3 = (a: number, b: number, c: number) => a + b + c;
export const add3Arr = (arr: [number, number, number]) =>
  arr[0] + arr[1] + arr[2];
export const even = (x: number): boolean => x % 2 === 0;
export const odd = (x: number): boolean => x % 2 !== 0;
export const passthrough = <T>(z: T, x: T) => x;
export const sum = (x: number, y: number): number => x + y;

export const createArray = (n: number): ReadonlyArray<number> => {
  const src = new Array(n);
  for (var i = 0; i < src.length; ++i) {
    src[i] = i;
  }
  return src;
};
