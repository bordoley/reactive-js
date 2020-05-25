import { fromArray } from "./fromArray.js";
const defaultEmpty = fromArray()([]);
export const empty = (options = {}) => {
    const { delay = 0 } = options;
    return delay > 0 ? fromArray({ delay })([]) : defaultEmpty;
};
