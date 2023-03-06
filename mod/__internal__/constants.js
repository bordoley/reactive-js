/// <reference types="./constants.d.ts" />

export const { MAX_SAFE_INTEGER } = Number;
export const __DEV__ = typeof process === "object" ? process.env.NODE_ENV !== "production" : false;
