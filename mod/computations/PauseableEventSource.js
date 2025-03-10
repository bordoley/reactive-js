/// <reference types="./PauseableEventSource.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { EventSourceLike_addEventListener, StoreLike_value, } from "../computations.js";
import { bindMethod, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { DispatcherLike_state, DispatcherState_capacityExceeded, DispatcherState_completed, DispatcherState_ready, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, } from "../utils.js";
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
export const dispatchTo = (dispatcher) => (src) => EventSource.create((listener) => {
    pipe(dispatcher[DispatcherLike_state], EventSource.addEventHandler(ev => {
        if (ev === DispatcherState_capacityExceeded ||
            ev === DispatcherState_completed) {
            src[PauseableLike_pause]();
        }
        else if (ev === DispatcherState_ready) {
            src[PauseableLike_resume]();
        }
    }), Disposable.addTo(listener));
    pipe(src, EventSource.addEventHandler(bindMethod(dispatcher, QueueableLike_enqueue)), Disposable.addTo(listener));
    src[EventSourceLike_addEventListener](listener);
    src[PauseableLike_resume]();
});
