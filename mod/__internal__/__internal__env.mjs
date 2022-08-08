/// <reference types="./__internal__env.d.ts" />
const __DEV__ = typeof process === "object" ? process.env.NODE_ENV !== "production" : false;
const __DENO__ = typeof Deno === "object";
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

export { MAX_SAFE_INTEGER, __DENO__, __DEV__ };
