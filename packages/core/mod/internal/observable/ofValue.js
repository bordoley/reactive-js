import { fromArray } from "./fromArray.js";
export function ofValue(value, delay = 0) {
    return fromArray([value], { delay });
}
