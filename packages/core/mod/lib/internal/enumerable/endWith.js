import { concatWith } from "./concat.js";
import { fromArray } from "./fromArray.js";
import { pipe } from "../../functions.js";
export function endWith(...values) {
    return pipe(values, fromArray(), concatWith);
}
