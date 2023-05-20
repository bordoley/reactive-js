/// <reference types="./ReadonlyArray.dispatchTo.d.ts" />

import { compose } from "../../functions.js";
import { DispatcherLike_complete } from "../../types.js";
import ReadonlyArray_enqueue from "./ReadonlyArray.enqueue.js";
const ReadonlyArray_dispatchTo = (dispatcher) => compose(ReadonlyArray_enqueue(dispatcher), (result) => {
    dispatcher[DispatcherLike_complete]();
    return result;
});
export default ReadonlyArray_dispatchTo;
