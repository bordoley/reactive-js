declare const process: {
  env: {
    NODE_ENV: string;
  };
};

export const __DEV__ =
  typeof process === "object" ? process.env.NODE_ENV !== "production" : false;

export const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
