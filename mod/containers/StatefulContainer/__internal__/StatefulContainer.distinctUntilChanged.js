/// <reference types="./StatefulContainer.distinctUntilChanged.d.ts" />

import { partial, pipe, strictEquality, } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_distinctUntilChanged = (m) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), StatefulContainer_lift(m));
};
export default StatefulContainer_distinctUntilChanged;
