/// <reference types="./Flowable.dispatchTo.d.ts" />

import * as EventSource from "../../../computations/EventSource.js";
import { DispatcherLike_state, DispatcherState_capacityExceeded, DispatcherState_completed, DispatcherState_ready, FlowableLike_flow, ObservableLike_observe, } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { PauseableLike_pause, PauseableLike_resume, QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import * as Observable from "../../Observable.js";
const Flowable_dispatchTo = (dispatcher) => (flowable) => Observable.create(observer => {
    const flowed = pipe(flowable[FlowableLike_flow](observer, {
        backpressureStrategy: observer[QueueableLike_backpressureStrategy],
        capacity: observer[QueueableLike_capacity],
    }), Disposable.addTo(observer));
    pipe(dispatcher[DispatcherLike_state], EventSource.addEventHandler(ev => {
        if (ev === DispatcherState_capacityExceeded ||
            ev === DispatcherState_completed) {
            flowed[PauseableLike_pause]();
        }
        else if (ev === DispatcherState_ready) {
            flowed[PauseableLike_resume]();
        }
    }), Disposable.addTo(observer));
    pipe(flowed, Observable.dispatchTo(dispatcher), invoke(ObservableLike_observe, observer));
    flowed[PauseableLike_resume]();
});
export default Flowable_dispatchTo;
