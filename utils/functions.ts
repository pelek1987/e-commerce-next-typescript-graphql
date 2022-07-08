export const first = <T>(arr: T | T[]): T | undefined =>
  Array.isArray(arr) ? arr[0] : arr;
