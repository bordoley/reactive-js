import { fromArray } from "./fromArray.js";
const defaultEmpty = fromArray()([]);
export function empty(delay = 0) {
    return delay > 0 ? fromArray({ delay })([]) : defaultEmpty;
}
