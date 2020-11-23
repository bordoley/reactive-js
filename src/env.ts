declare var process: any;

export const __DEV__ =
  typeof process === "object" ? process.env.NODE_ENV !== "production" : false;

declare var Deno: any;
export const isDeno = typeof Deno === "object";