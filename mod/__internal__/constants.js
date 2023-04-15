/// <reference types="./constants.d.ts" />

export const { MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE } = Number;
const process = typeof global === "object"
    ? global.process
    : {
        env: {
            NODE_ENV: "development",
        },
    };
export const __DEV__ = process.env.NODE_ENV !== "production";
export const __DENO__ = typeof Deno === "object";
