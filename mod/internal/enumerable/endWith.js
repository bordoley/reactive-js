import { pipe } from "../../functions.js";
import { concatWith } from "./concat.js";
import { fromArray } from "./fromArray.js";
export function endWith(...values) {
    return pipe(values, fromArray(), concatWith);
}
