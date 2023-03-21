/// <reference types="./constants.d.ts" />

export const { MAX_SAFE_INTEGER } = Number;
const process = typeof global === "object"
    ? global.process
    : {
        env: {
            NODE_ENV: "development",
        },
    };
export const __DEV__ = process.env.NODE_ENV !== "production";
export const __DENO__ = typeof Deno === "object";
