import { pipe } from "../../functions.js";
import { flatten } from "./flatten.js";
import { fromArray } from "./fromArray.js";
export function concat(...enumerables) {
    return pipe(enumerables, fromArray(), flatten());
}
export const concatWith = (snd) => first => concat(first, snd);
