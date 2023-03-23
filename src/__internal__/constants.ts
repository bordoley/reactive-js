export const { MAX_SAFE_INTEGER, MAX_VALUE } = Number;

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
