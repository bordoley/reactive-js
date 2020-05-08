import { fromArray } from "./fromArray.js";
export const fromValue = (delay = 0) => {
    const call = fromArray({ delay });
    return v => call([v]);
};
