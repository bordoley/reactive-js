/// <reference types="./SynchronousObservable.currentTime.d.ts" />

import { ReactiveSourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { SchedulerLike_now } from "../../../utils.js";
import { Observable_genPure } from "../../Observable/__private__/Observable.gen.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const SynchronousObservable_currentTime = 
/*@__PURE__*/ DeferredReactiveSource.create((observer) => pipe(Observable_genPure(function* CurrentTime() {
    while (true) {
        yield observer[SchedulerLike_now];
    }
}), invoke(ReactiveSourceLike_subscribe, observer)));
export default SynchronousObservable_currentTime;
