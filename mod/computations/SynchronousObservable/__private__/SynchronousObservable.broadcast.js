/// <reference types="./SynchronousObservable.broadcast.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import { EventListenerLike_notify, PauseableLike_resume, } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import * as Publisher from "../../Publisher.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";
const createPauseableBroadcasterFromSynchronousObservable = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingPauseableMixin, DelegatingBroadcasterMixin()), function PauseableBroadcasterFromSynchronousObservable(obs, options) {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const pauseableScheduler = PauseableScheduler.create(scheduler);
    init(DelegatingDisposableMixin, this, pauseableScheduler);
    init(DelegatingPauseableMixin, this, pauseableScheduler);
    const publisher = pipe(Publisher.create(options), Disposable.addTo(this));
    init(DelegatingBroadcasterMixin(), this, publisher);
    pipe(obs, Observable_forEach(bindMethod(publisher, EventListenerLike_notify)), EventSource.subscribe({ scheduler: pauseableScheduler }), Disposable.addTo(this));
    this[PauseableLike_resume]();
    return this;
}))();
const SynchronousObservable_broadcast = ((options) => (observable) => createPauseableBroadcasterFromSynchronousObservable(observable, options));
export default SynchronousObservable_broadcast;
