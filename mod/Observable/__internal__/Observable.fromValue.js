/// <reference types="./Observable.fromValue.d.ts" />

import ReadonlyArray_toRunnable from "../../ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { none, pipe } from "../../functions.js";
const Observable_fromValue = ((options) => (value) => {
    const { delay = 0 } = options ?? {};
    return pipe([value], ReadonlyArray_toRunnable(delay > 0 ? { delay, delayStart: true } : none));
});
export default Observable_fromValue;
