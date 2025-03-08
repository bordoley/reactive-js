/// <reference types="./Flowable.fromSynchronousObservable.d.ts" />

import { FlowableLike_flow, } from "../../../computations.js";
import * as Observable from "../../Observable.js";
const Flowable_fromSynchronousObservable = () => (obs) => ({
    [FlowableLike_flow]: (scheduler, options) => Observable.toPauseableObservable(scheduler, options)(obs),
});
export default Flowable_fromSynchronousObservable;
