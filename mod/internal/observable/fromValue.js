import { fromArray } from "./fromArray.js";
export const fromValue = (options = {}) => {
    const call = fromArray(options);
    return v => call([v]);
};
