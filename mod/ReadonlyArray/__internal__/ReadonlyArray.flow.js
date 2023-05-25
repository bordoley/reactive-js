/// <reference types="./ReadonlyArray.flow.d.ts" />

import Observable_delay from "../../Observable/__internal__/Observable.delay.js";
import Observable_flow from "../../Observable/__internal__/Observable.flow.js";
import { compose, identity } from "../../functions.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_flow = (scheduler, options) => compose(ReadonlyArray_toObservable(options), ((options?.delay ?? 0) > 0
    ? Observable_delay(options?.delay ?? 0)
    : identity), Observable_flow(scheduler, options));
export default ReadonlyArray_flow;
