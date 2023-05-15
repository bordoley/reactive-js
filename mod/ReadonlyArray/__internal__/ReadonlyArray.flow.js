/// <reference types="./ReadonlyArray.flow.d.ts" />

import Runnable_flow from "../../Runnable/__internal__/Runnable.flow.js";
import { compose } from "../../functions.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_flow = (scheduler, options) => compose(ReadonlyArray_toObservable(options), Runnable_flow(scheduler, options));
export default ReadonlyArray_flow;
