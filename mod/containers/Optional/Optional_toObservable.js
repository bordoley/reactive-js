/// <reference types="./Optional_toObservable.d.ts" />

import { compose, none } from "../../functions.js";
import ReadonlyArray_toObservable from "../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Optional_toReadonlyArray from "./Optional_toReadonlyArray.js";
const Optional_toObservable = ((options) => {
    const { delay = 0 } = options !== null && options !== void 0 ? options : {};
    const toObservableOptions = delay > 0 ? { delay, delayStart: true } : none;
    return compose(Optional_toReadonlyArray(), ReadonlyArray_toObservable(toObservableOptions));
});
export default Optional_toObservable;
