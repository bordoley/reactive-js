const __DEV__ = typeof process === "object" ? process.env.NODE_ENV !== "production" : false;
const warn = (message) => {
    if (__DEV__) {
        console.warn(message);
    }
};
const __DENO__ = typeof Deno === "object";

export { __DENO__, __DEV__, warn };
