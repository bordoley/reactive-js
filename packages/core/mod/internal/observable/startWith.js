import { concat } from "./concat.js";
import { fromArray } from "./fromArray.js";
export function startWith(...values) {
    return obs => concat(fromArray(values), obs);
}
