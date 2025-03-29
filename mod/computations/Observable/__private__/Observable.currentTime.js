/// <reference types="./Observable.currentTime.d.ts" />

import { SourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { SchedulerLike_now } from "../../../utils.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Observable_genPure } from "./Observable.gen.js";
const Observable_currentTime = 
/*@__PURE__*/ DeferredSource.create((observer) => pipe(Observable_genPure(function* CurrentTime() {
    while (true) {
        yield observer[SchedulerLike_now];
    }
}), invoke(SourceLike_subscribe, observer)));
export default Observable_currentTime;
