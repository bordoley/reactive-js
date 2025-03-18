/// <reference types="./EventListener.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../__internal__/mixins.js";
import { returns } from "../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_complete, SinkLike_isCompleted, } from "../utils.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin from "./__mixins__/DelegatingEventListenerMixin.js";
export const toSink = /*@__PURE__*/ (() => {
    const createEventListenerSink = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingEventListenerMixin()), function EventListenerSink(listener) {
        init(DelegatingDisposableMixin, this, listener);
        init(DelegatingEventListenerMixin(), this, listener);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    }));
    return returns((sink) => createEventListenerSink(sink));
})();
