export const typeofObject = "object";
export const Global_process = "process";

type GlobalObject = {
  // strictly speaking this should be optional, but its only
  // used if setImmediate is not optional.
  clearImmediate: typeof globalThis.clearImmediate;
  clearTimeout: typeof globalThis.clearTimeout;

  describe?: jest.Describe;
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
  requestAnimationFrame?: typeof globalThis.requestAnimationFrame;
  setImmediate?: typeof globalThis.setImmediate;
  setTimeout: typeof globalThis.setTimeout;
  test?: jest.It;

  Array: typeof globalThis.Array;
  Deno?: {
    test(name: string, f: () => void): void;
  };
  Error: typeof globalThis.Error;
  Function: typeof globalThis.Function;
  Map: typeof globalThis.Map;
  Math: typeof globalThis.Math;
  Number: typeof globalThis.Number;
  Object: typeof globalThis.Object;
  Promise: typeof globalThis.Promise;
  Set: typeof globalThis.Set;
  String: typeof globalThis.String;
  Symbol: typeof globalThis.Symbol;
  TextDecoder: typeof globalThis.TextDecoder;
};

export const globalObject: GlobalObject = (
  typeof window === typeofObject ? window : global
) as GlobalObject;

export const Array = globalObject.Array;
export const Error = globalObject.Error;
export const Function = globalObject.Function;
export const Map = globalObject.Map;
export const Math = globalObject.Math;
export const Number = globalObject.Number;
export const Obj = globalObject.Object;
export const Promise = globalObject.Promise;
export const Set = globalObject.Set;
export const String = globalObject.String;
export const Symbol = globalObject.Symbol;

export const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
export const MAX_VALUE = Number.MAX_VALUE;
export const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
export const MIN_VALUE = Number.MIN_VALUE;

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
