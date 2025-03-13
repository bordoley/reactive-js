/// <reference types="./PauseableEventSource.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { EventSourceLike_addEventListener, StoreLike_value, } from "../computations.js";
import { bindMethod, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, QueueableLike_onReady, } from "../utils.js";
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
export const enqueue = (queue) => (src) => EventSource.create((listener) => {
    pipe(queue[QueueableLike_onReady], EventSource.addEventHandler(bindMethod(src, PauseableLike_resume)), Disposable.addTo(listener));
    pipe(src, EventSource.addEventHandler(v => {
        if (!queue[QueueableLike_enqueue](v)) {
            src[PauseableLike_pause]();
        }
    }), Disposable.addTo(listener));
    src[EventSourceLike_addEventListener](listener);
    src[PauseableLike_resume]();
});
