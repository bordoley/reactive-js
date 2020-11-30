declare const process: any;

export const __DEV__ =
  typeof process === "object" ? process.env.NODE_ENV !== "production" : false;

export const warn = (message: string) => {
  if (__DEV__) {
    console.warn(message);
  }
};

declare const Deno: any;
export const __DENO__ = typeof Deno === "object";
