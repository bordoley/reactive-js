/// <reference types="./Optional.toObservable.d.ts" />

import ReadonlyArray_toObservable from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose, none } from "../../../functions.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";
const Optional_toObservable = ((options) => {
    const { delay = 0 } = options ?? {};
    const toObservableOptions = delay > 0 ? { delay, delayStart: true } : none;
    return compose(Optional_toReadonlyArray(), ReadonlyArray_toObservable(toObservableOptions));
});
export default Optional_toObservable;
