/// <reference types="./PauseableEventSource.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ProducerLike_consume, StoreLike_value, } from "../computations.js";
import { bindMethod, newInstance, none, pipe, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_isReady, EventListenerLike_notify, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../utils.js";
import * as EventSource from "./EventSource.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingEventSourceMixin from "./__mixins__/DelegatingEventSourceMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingEventSourceMixin()), function PauseableEventSource(op) {
        const writableStore = (this[PauseableLike_isPaused] =
            WritableStore.create(true));
        const delegate = pipe(writableStore, op);
        init(DelegatingDisposableMixin, this, writableStore);
        init(DelegatingEventSourceMixin(), this, delegate);
        this[PauseableLike_resume]();
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
class ProducerFromPauseableEventSource {
    e;
    [ComputationLike_isPure] = true;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = false;
    constructor(e) {
        this.e = e;
    }
    [ProducerLike_consume](consumer) {
        const src = this.e;
        src[PauseableLike_pause]();
        consumer[ConsumerLike_addOnReadyListener](bindMethod(src, PauseableLike_resume));
        pipe(src, EventSource.addEventHandler(v => {
            consumer[EventListenerLike_notify](v);
            if (!consumer[ConsumerLike_isReady]) {
                src[PauseableLike_pause]();
            }
        }), Disposable.addTo(consumer));
        if (consumer[ConsumerLike_isReady]) {
            src[PauseableLike_resume]();
        }
    }
}
export const toProducer = () => (pauseable) => newInstance(ProducerFromPauseableEventSource, pauseable);
