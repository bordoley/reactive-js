/// <reference types="./PauseableObservable.sinkInto.d.ts" />

import { DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, PauseableLike_pause, PauseableLike_resume, } from "../../../concurrent.js";
import * as EventSource from "../../../events/EventSource.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "../../Observable/__private__/Observable.create.js";
import Observable_dispatchTo from "../../Observable/__private__/Observable.dispatchTo.js";
import Observable_subscribe from "../../Observable/__private__/Observable.subscribe.js";
const PauseableObservable_sinkInto = (sink) => (pauseableObservable) => Observable_create(observer => {
    pipe(sink, EventSource.addEventHandler((ev) => {
        if (ev === DispatcherLikeEvent_capacityExceeded ||
            ev === DispatcherLikeEvent_completed) {
            pauseableObservable[PauseableLike_pause]();
        }
        else if (ev === DispatcherLikeEvent_ready) {
            pauseableObservable[PauseableLike_resume]();
        }
    }), Disposable.addTo(observer));
    pipe(pauseableObservable, Observable_dispatchTo(sink), Observable_subscribe(observer), Disposable.addTo(observer));
    pauseableObservable[PauseableLike_resume]();
});
export default PauseableObservable_sinkInto;
