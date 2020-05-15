import { pipe } from "../../functions.js";
import { reduce } from "./reduce.js";
export const toArray = (enumerable) => pipe(enumerable, reduce((acc, next) => {
    acc.push(next);
    return acc;
}, () => []));
