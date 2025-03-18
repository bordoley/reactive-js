/// <reference types="./Observable.broadcast.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import * as Sink from "../../../utils/Sink.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import * as Computation from "../../Computation.js";
import * as Subject from "../../Subject.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";
const broadcastObservable = (observable, scheduler, options) => {
    const subject = Subject.create(options);
    const observer = pipe(subject, Sink.toObserver(scheduler));
    observable[ObservableLike_observe](observer);
    return subject;
};
const createPauseableBroadcasterFromSynchronousObservable = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingPauseableMixin, DelegatingBroadcasterMixin()), function PauseableBroadcasterFromSynchronousObservable(obs, scheduler, multicastOptions) {
    const pauseableScheduler = PauseableScheduler.create(scheduler);
    init(DelegatingDisposableMixin, this, pauseableScheduler);
    init(DelegatingPauseableMixin, this, pauseableScheduler);
    const multicastObs = pipe(broadcastObservable(obs, pauseableScheduler, multicastOptions), Disposable.bindTo(this));
    init(DelegatingBroadcasterMixin(), this, multicastObs);
    return this;
}))();
const Observable_broadcast = ((scheduler, options) => (observable) => Computation.isSynchronous(observable)
    ? createPauseableBroadcasterFromSynchronousObservable(observable, scheduler, options)
    : broadcastObservable(observable, scheduler, options));
export default Observable_broadcast;
