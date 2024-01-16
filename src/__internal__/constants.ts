export const { MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE } =
  Number;

const process =
  typeof global === "object"
    ? global.process
    : {
        env: {
          NODE_ENV: "development",
        },
      };
export const __DEV__ = process.env.NODE_ENV !== "production";

declare const Deno: {
  test(name: string, f: () => void): void;
};

export const __DENO__ = typeof Deno === "object";

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
