import { reduce } from "./reduce.js";
import { pipe } from "../../functions.js";
export const toArray = (enumerable) => pipe(enumerable, reduce((acc, next) => {
    acc.push(next);
    return acc;
}, () => []));
