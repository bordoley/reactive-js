/// <reference types="./constants.d.ts" />
const { MAX_SAFE_INTEGER } = Number;
const __DEV__ = typeof process === "object" ? process.env.NODE_ENV !== "production" : false;

export { MAX_SAFE_INTEGER, __DEV__ };
