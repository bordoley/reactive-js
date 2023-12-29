/// <reference types="./PauseableObservable.sinkInto.d.ts" />

import { DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, PauseableLike_pause, PauseableLike_resume, } from "../../../concurrent.js";
import * as EventSource from "../../../events/EventSource.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
const PauseableObservable_sinkInto = (sink) => (pauseableObservable) => Observable.create(observer => {
    pipe(sink, EventSource.addEventHandler(ev => {
        if (ev === DispatcherLikeEvent_capacityExceeded ||
            ev === DispatcherLikeEvent_completed) {
            pauseableObservable[PauseableLike_pause]();
        }
        else if (ev === DispatcherLikeEvent_ready) {
            pauseableObservable[PauseableLike_resume]();
        }
    }), Disposable.addTo(observer));
    pipe(pauseableObservable, Observable.dispatchTo(sink), Observable.subscribe(observer), Disposable.addTo(observer));
    pauseableObservable[PauseableLike_resume]();
});
export default PauseableObservable_sinkInto;
