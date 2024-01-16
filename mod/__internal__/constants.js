/// <reference types="./constants.d.ts" />

export const { MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE } = Number;
export const none = undefined;
export const typeofObject = "object";
export const globalObject = typeof window === typeofObject ? window : global;
export const Global_process = "process";
const process = globalObject[Global_process] ?? {
    env: {
        NODE_ENV: "development",
    },
};
export const __DEV__ = process.env.NODE_ENV !== "production";
export const __DENO__ = globalObject.Deno !== none;
export const Array_every = "every";
export const Array_length = "length";
export const Array_map = "map";
export const Array_push = "push";
export const Iterator_done = "done";
export const Iterator_next = "next";
export const Iterator_value = "value";
export const Map_delete = "delete";
export const Map_get = "get";
export const Map_set = "set";
export const Map_size = "size";
export const Set_add = "add";
export const Set_delete = Map_delete;
export const Set_has = "has";
export const Set_size = Map_size;
