const __DEV__ = typeof process === "object" ? process.env.NODE_ENV !== "production" : false;
const isDeno = typeof Deno === "object";

export { __DEV__, isDeno };
