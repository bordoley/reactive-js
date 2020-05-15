import { reduce } from "./reduce.js";
export const toArray = () => reduce((acc, next) => {
    acc.push(next);
    return acc;
}, () => []);
