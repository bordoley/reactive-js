import { concatWith } from "./concat.js";
import { fromArray } from "./fromArray.js";
export function endWith(...values) {
    return concatWith(fromArray(values));
}
