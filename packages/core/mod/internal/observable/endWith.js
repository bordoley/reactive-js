import { concat } from "./concat.js";
import { fromArray } from "./fromArray.js";
export function endWith(...values) {
    return obs => concat(obs, fromArray(values));
}
