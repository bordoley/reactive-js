/// <reference types="./StatefulContainer.distinctUntilChanged.d.ts" />

import { partial, pipe, strictEquality, } from "../../../functions.js";
const StatefulContainer_distinctUntilChanged = (lift) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), lift);
};
export default StatefulContainer_distinctUntilChanged;
