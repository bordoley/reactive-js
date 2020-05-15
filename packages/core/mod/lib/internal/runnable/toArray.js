import { pipe } from "../../functions.js";
import { reduce } from "./reduce.js";
export const toArray = (runnable) => pipe(runnable, reduce((acc, next) => {
    acc.push(next);
    return acc;
}, () => []));
