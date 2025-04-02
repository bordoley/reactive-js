/// <reference types="./Observable.currentTime.d.ts" />

import { EventSourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { SchedulerLike_now } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Observable_genPure } from "./Observable.gen.js";
const Observable_currentTime = 
/*@__PURE__*/ DeferredEventSource.create((observer) => pipe(Observable_genPure(function* CurrentTime() {
    while (true) {
        yield observer[SchedulerLike_now];
    }
}), invoke(EventSourceLike_subscribe, observer)));
export default Observable_currentTime;
