/// <reference types="./Optional.toRunnable.d.ts" />

import ReadonlyArray_toRunnable from "../../ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { compose, none } from "../../functions.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";
const Optional_toRunnable = ((options) => {
    const { delay = 0 } = options ?? {};
    const toRunnableOptions = delay > 0 ? { delay, delayStart: true } : none;
    return compose(Optional_toReadonlyArray(), ReadonlyArray_toRunnable(toRunnableOptions));
});
export default Optional_toRunnable;
