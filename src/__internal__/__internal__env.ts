import { isObject } from "../functions";

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

export const __DEV__ = isObject(process)
  ? process.env.NODE_ENV !== "production"
  : false;

export const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
