const __DEV__ = typeof process === "object" ? process.env.NODE_ENV !== "production" : false;
const __DENO__ = typeof Deno === "object";

export { __DENO__, __DEV__ };
