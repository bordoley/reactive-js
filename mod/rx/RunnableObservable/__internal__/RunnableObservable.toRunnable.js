/// <reference types="./RunnableObservable.toRunnable.d.ts" />

import { pipe } from "../../../functions.js";
import Continuation_run from "../../../scheduling/Continuation/__internal__/Continuation.run.js";
import VirtualTimeScheduler_create from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Sink_notifySink from "../../Sink/__internal__/Sink.notifySink.js";
const RunnableObservable_toRunnable = () => observable => Runnable_create(sink => {
    const scheduler = VirtualTimeScheduler_create();
    pipe(observable, Observable_forEach(Sink_notifySink(sink)), Observable_subscribe(scheduler), Disposable_addTo(sink));
    pipe(scheduler, Disposable_addTo(sink), Continuation_run, Disposable_dispose());
});
export default RunnableObservable_toRunnable;
