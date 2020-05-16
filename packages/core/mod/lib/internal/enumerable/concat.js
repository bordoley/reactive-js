import { pipe } from "../../functions.js";
import { concatAll } from "./concatAll.js";
import { fromArray } from "./fromArray.js";
export function concat(...enumerables) {
    return pipe(enumerables, fromArray(), concatAll());
}
export const concatWith = (snd) => first => concat(first, snd);
