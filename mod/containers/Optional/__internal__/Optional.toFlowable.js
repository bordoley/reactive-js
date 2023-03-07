/// <reference types="./Optional.toFlowable.d.ts" />

import { compose, none } from "../../../functions.js";
import ReadonlyArray_toFlowable from "../../ReadonlyArray/__internal__/ReadonlyArray.toFlowable.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";
const Optional_toFlowable = (options) => {
    const { delay = 0 } = options !== null && options !== void 0 ? options : {};
    const toFlowableOptions = delay > 0 ? { delay, delayStart: true } : none;
    return compose(Optional_toReadonlyArray(), ReadonlyArray_toFlowable(toFlowableOptions));
};
export default Optional_toFlowable;
