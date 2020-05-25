import { fromArray } from "./fromArray.js";
export const fromValue = (config = {}) => {
    const call = fromArray(config);
    return v => call([v]);
};
