import { fromArray } from "./fromArray.js";
export const fromValue = (config = { delay: 0 }) => {
    const call = fromArray(config);
    return v => call([v]);
};
