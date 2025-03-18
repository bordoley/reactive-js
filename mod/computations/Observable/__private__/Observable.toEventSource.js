/// <reference types="./Observable.toEventSource.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import EventSource_create from "../../EventSource/__private__/EventSource.create.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const createPauseableEventSource = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingPauseableMixin, DelegatingEventSourceMixin()), function PauseableEventSourceFromSynchronousObservable(obs, scheduler) {
    const pauseableScheduler = PauseableScheduler.create(scheduler);
    const eventSource = pipe(createEventSource(obs, scheduler), Disposable.bindTo(pauseableScheduler));
    init(DelegatingDisposableMixin, this, pauseableScheduler);
    init(DelegatingPauseableMixin, this, pauseableScheduler);
    init(DelegatingEventSourceMixin(), this, eventSource);
    return this;
}))();
const ObservableModule = { forEach: Observable_forEach };
const createEventSource = (obs, scheduler) => EventSource_create(listener => pipe(obs, Computation.notify(ObservableModule)(listener), Observable_subscribe(scheduler), Disposable.bindTo(listener)));
const Observable_toEventSource = ((scheduler) => (obs) => Computation.isSynchronous(obs)
    ? createPauseableEventSource(obs, scheduler)
    : createEventSource(obs, scheduler));
export default Observable_toEventSource;
