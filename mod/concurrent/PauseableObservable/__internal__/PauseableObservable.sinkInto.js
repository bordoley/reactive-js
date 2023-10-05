/// <reference types="./PauseableObservable.sinkInto.d.ts" />

import { pipe } from "../../../functions.js";
import { DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, PauseableLike_pause, PauseableLike_resume, } from "../../../rx.js";
import * as EventSource from "../../../rx/EventSource.js";
import Disposable_addTo from "../../../utils/Disposable/__internal__/Disposable.addTo.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_dispatchTo from "../../Observable/__internal__/Observable.dispatchTo.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
const PauseableObservable_sinkInto = (sink) => (pauseableObservable) => Observable_create(observer => {
    pipe(sink, EventSource.addEventHandler((ev) => {
        if (ev === DispatcherLikeEvent_capacityExceeded ||
            ev === DispatcherLikeEvent_completed) {
            pauseableObservable[PauseableLike_pause]();
        }
        else if (ev === DispatcherLikeEvent_ready) {
            pauseableObservable[PauseableLike_resume]();
        }
    }), Disposable_addTo(observer));
    pipe(pauseableObservable, Observable_dispatchTo(sink), Observable_subscribe(observer), Disposable_addTo(observer));
    pauseableObservable[PauseableLike_resume]();
});
export default PauseableObservable_sinkInto;
