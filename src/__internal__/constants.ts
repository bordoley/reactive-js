export const { MAX_SAFE_INTEGER } = Number;

const process = self.process ?? { env: {}};
export const __DEV__ = process.env.NODE_ENV !== "production" ;

declare const Deno: {
  test(name: string, f: () => void): void;
};

export const __DENO__ = typeof Deno === "object";
