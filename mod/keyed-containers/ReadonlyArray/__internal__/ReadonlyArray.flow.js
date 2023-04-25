/// <reference types="./ReadonlyArray.flow.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_flow from "../../../rx/Runnable/__internal__/Runnable.flow.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_toFlowable = (scheduler, options) => compose(ReadonlyArray_toObservable(options), Runnable_flow(scheduler, options));
export default ReadonlyArray_toFlowable;
