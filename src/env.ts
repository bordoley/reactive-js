declare const process: any;

export const __DEV__ =
  typeof process === "object" ? process.env.NODE_ENV !== "production" : false;

declare const Deno: any;
export const __DENO__ = typeof Deno === "object";

export const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
