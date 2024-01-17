/// <reference types="node" resolution-mode="require"/>
export declare const MAX_SAFE_INTEGER: number, MAX_VALUE: number, MIN_SAFE_INTEGER: number, MIN_VALUE: number;
export declare const typeofObject = "object";
export declare const Global_process = "process";
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
        env: {
            [key in string]?: unknown;
        };
        hrtime?: () => [number, number];
    };
    setImmediate?: <TArgs extends any[]>(callback: (...args: TArgs) => void, ...args: TArgs) => NodeJS.Immediate;
    Array: typeof globalThis.Array;
    Deno?: unknown;
    Error: typeof globalThis.Error;
    Map: typeof globalThis.Map;
    Set: typeof globalThis.Set;
};
export declare const globalObject: GlobalObject;
export declare const Array: ArrayConstructor;
export declare const Error: ErrorConstructor;
export declare const Map: MapConstructor;
export declare const Set: SetConstructor;
export declare const __DEV__: boolean;
export declare const Array_every = "every";
export declare const Array_length = "length";
export declare const Array_map = "map";
export declare const Array_push = "push";
export declare const Iterator_done = "done";
export declare const Iterator_next = "next";
export declare const Iterator_value = "value";
export declare const Map_delete = "delete";
export declare const Map_get = "get";
export declare const Map_set = "set";
export declare const Map_size = "size";
export declare const Set_add = "add";
export declare const Set_delete = "delete";
export declare const Set_has = "has";
export declare const Set_size = "size";
export {};
