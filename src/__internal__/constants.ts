export const typeofObject = "object";
export const Global_process = "process";

type GlobalObject = {
  navigator?: {
    scheduling?: {
      isInputPending?: () => boolean;
    };
  };
  performance?: {
    now: () => number;
  };
  process?: {
    env: { [key in string]?: unknown };
    hrtime?: () => [number, number];
  };
  setImmediate?: <TArgs extends any[]>(
    callback: (...args: TArgs) => void,
    ...args: TArgs
  ) => NodeJS.Immediate;

  Array: typeof globalThis.Array;
  Deno?: unknown;
  Error: typeof globalThis.Error;
  Map: typeof globalThis.Map;
  Number: typeof globalThis.Number;
  Set: typeof globalThis.Set;
  String: typeof globalThis.String;
  Symbol: typeof globalThis.Symbol;
};

export const globalObject: GlobalObject = (
  typeof window === typeofObject ? window : global
) as GlobalObject;

export const Array = globalObject.Array;
export const Error = globalObject.Error;
export const Map = globalObject.Map;
export const Number = globalObject.Number;
export const Set = globalObject.Set;
export const String = globalObject.String;
export const Symbol = globalObject.Symbol;

export const { MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE } =
  Number;

const process = globalObject[Global_process] ?? {
  env: {
    NODE_ENV: "development",
  },
};

export const __DEV__ = process.env.NODE_ENV !== "production";

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

export const nullObject = null;
