/// <reference types="./PauseableEventSource.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { StoreLike_value, } from "../computations.js";
import { none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as PauseableScheduler from "../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../utils/__mixins__/DelegatingPauseableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../utils.js";
import * as Observable from "./Observable.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingEventSourceMixin from "./__mixins__/DelegatingEventSourceMixin.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingMulticastObservableMixin(), DelegatingEventSourceMixin()), function PauseableEventSource(instance, op) {
        const writableStore = (instance[PauseableLike_isPaused] =
            WritableStore.create(true));
        const delegate = pipe(writableStore, op);
        init(DelegatingDisposableMixin, instance, writableStore);
        init(DelegatingEventSourceMixin(), instance, delegate);
        return instance;
    }, props({
        [PauseableLike_isPaused]: none,
    }), {
        [PauseableLike_pause]() {
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            this[PauseableLike_isPaused][StoreLike_value] = false;
        },
    });
})();
export const fromSynchronousObservable = 
/*@__PURE__*/ (() => {
    const createPauseableEventSourceFromSynchronousObservable = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingPauseableMixin, DelegatingEventSourceMixin()), function PauseableEventSourceFromSynchronousObservable(instance, obs, scheduler, options) {
        const pauseableScheduler = PauseableScheduler.create(scheduler);
        const eventSource = pipe(obs, Observable.toEventSource(scheduler, options), Disposable.bindTo(pauseableScheduler));
        init(DelegatingDisposableMixin, instance, pauseableScheduler);
        init(DelegatingPauseableMixin, instance, pauseableScheduler);
        init(DelegatingEventSourceMixin(), instance, eventSource);
        return instance;
    });
    return (scheduler, options) => (obs) => createPauseableEventSourceFromSynchronousObservable(obs, scheduler, options);
})();
