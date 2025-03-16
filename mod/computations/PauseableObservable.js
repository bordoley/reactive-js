/// <reference types="./PauseableObservable.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ProducerLike_consume, StoreLike_value, } from "../computations.js";
import { bindMethod, newInstance, none, pipe, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_isReady, EventListenerLike_notify, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../utils.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import Observable_subscribe from "./Observable/__private__/Observable.subscribe.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingMulticastObservableMixin()), function PauseableObservable(op) {
        const writableStore = (this[PauseableLike_isPaused] =
            WritableStore.create(true));
        const observableDelegate = pipe(writableStore, op);
        pipe(writableStore, Disposable.addToContainer(observableDelegate));
        init(DelegatingDisposableMixin, this, writableStore);
        init(DelegatingMulticastObservableMixin(), this, observableDelegate);
        return this;
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
class ProducerFromPauseableObservable {
    o;
    s;
    [ComputationLike_isPure] = true;
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(o, s) {
        this.o = o;
        this.s = s;
    }
    [ProducerLike_consume](consumer) {
        const src = this.o;
        const scheduler = this.s;
        src[PauseableLike_pause]();
        consumer[ConsumerLike_addOnReadyListener](bindMethod(src, PauseableLike_resume));
        pipe(src, Observable_forEach(v => {
            consumer[EventListenerLike_notify](v);
            if (!consumer[ConsumerLike_isReady]) {
                src[PauseableLike_pause]();
            }
        }), Observable_subscribe(scheduler));
        if (consumer[ConsumerLike_isReady]) {
            src[PauseableLike_resume]();
        }
    }
}
export const toProducer = (scheduler) => (pauseable) => newInstance(ProducerFromPauseableObservable, pauseable, scheduler);
