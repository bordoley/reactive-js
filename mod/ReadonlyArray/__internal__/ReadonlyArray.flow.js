/// <reference types="./ReadonlyArray.flow.d.ts" />

import Observable_flow from "../../Observable/__internal__/Observable.flow.js";
import { compose } from "../../functions.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_flow = (scheduler, options) => compose(ReadonlyArray_toObservable(options), Observable_flow(scheduler, options));
export default ReadonlyArray_flow;
