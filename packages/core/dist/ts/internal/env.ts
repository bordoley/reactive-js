declare var process: any;

export const __DEV__ = typeof process === "object"
  ? process.env.NODE_ENV !== "production"
  : false;