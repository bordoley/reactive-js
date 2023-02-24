/// <reference types="./Flowable.toObservable.d.ts" />

import { compose, pipe, returns } from "../../../functions.js";
import { ObserverLike_dispatcher, ObserverLike_scheduler, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import { PauseableState_paused, PauseableState_running, } from "../../../scheduling.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queueable_pushTo from "../../../util/Queueable/__internal__/Queueable.pushTo.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Stream_sourceFrom from "../../Stream/__internal__/Stream.sourceFrom.js";
const Flowable_toObservable = () => src => Observable_create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(Observable_forEach(Queueable_pushTo(dispatcher)), Observable_ignoreElements(), Observable_startWith(returns(PauseableState_paused), returns(PauseableState_running)), Observable_onSubscribe(() => dispatcher));
    pipe(Stream_create(op, scheduler), Stream_sourceFrom(src), Disposable_addTo(observer));
});
export default Flowable_toObservable;
