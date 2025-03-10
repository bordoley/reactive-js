/// <reference types="./Observable.toPauseableEventSource.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import Observable_toEventSource from "./Observable.toEventSource.js";
const Observable_toPauseableEventSource = 
/*@__PURE__*/ (() => {
    const createPauseableEventSourceFromSynchronousObservable = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingPauseableMixin, DelegatingEventSourceMixin()), function PauseableEventSourceFromSynchronousObservable(obs, scheduler, options) {
        const pauseableScheduler = PauseableScheduler.create(scheduler);
        const eventSource = pipe(obs, Observable_toEventSource(scheduler, options), Disposable.bindTo(pauseableScheduler));
        init(DelegatingDisposableMixin, this, pauseableScheduler);
        init(DelegatingPauseableMixin, this, pauseableScheduler);
        init(DelegatingEventSourceMixin(), this, eventSource);
        return this;
    });
    return (scheduler, options) => (obs) => createPauseableEventSourceFromSynchronousObservable(obs, scheduler, options);
})();
export default Observable_toPauseableEventSource;
