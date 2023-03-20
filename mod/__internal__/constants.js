/// <reference types="./constants.d.ts" />

var _a;
export const { MAX_SAFE_INTEGER } = Number;
const process = (_a = self.process) !== null && _a !== void 0 ? _a : { env: {} };
export const __DEV__ = process.env.NODE_ENV !== "production";
export const __DENO__ = typeof Deno === "object";
