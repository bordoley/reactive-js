export const { MAX_SAFE_INTEGER } = Number;

export const __DEV__ =
  typeof process === "object" ? process.env.NODE_ENV !== "production" : false;

declare const Deno: {
  test(name: string, f: () => void): void;
};

export const __DENO__ = typeof Deno === "object";
