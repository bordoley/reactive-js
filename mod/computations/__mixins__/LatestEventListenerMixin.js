/// <reference types="./LatestEventListenerMixin.d.ts" />

import { Array_every } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { none, pick, pipe, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin, { DelegatingEventListenerLike_delegate, } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify } from "../../utils.js";
export const LatestEventListenerValue_value = Symbol("LatestEventListenerValue_value");
export const LatestEventListenerValue_hasValue = Symbol("LatestEventListenerValue_hasValue");
export const LatestEventListenerContextLike_completedCount = Symbol("LatestEventListenerContextLike_completedCount");
export const LatestEventListenerContextLike_mode = Symbol("LatestEventListenerContextLike_mode");
export const LatestEventListenerContextLike_values = Symbol("LatestEventListenerContextLike_values");
const LatestEventListenerMixin = /*@__PURE__*/ (() => {
    const LatestEventListener_context = Symbol("LatestEventListener_context");
    return returns(mix(include(DelegatingDisposableMixin, DelegatingEventListenerMixin()), function LatestEventListenerMixin(delegate, context) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingEventListenerMixin(), this, delegate);
        this[LatestEventListener_context] = context;
        return this;
    }, props({
        [LatestEventListener_context]: none,
        [LatestEventListenerValue_hasValue]: false,
        [LatestEventListenerValue_value]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const ctx = this[LatestEventListener_context];
            const mode = ctx[LatestEventListenerContextLike_mode];
            const values = ctx[LatestEventListenerContextLike_values];
            const delegate = this[DelegatingEventListenerLike_delegate];
            this[LatestEventListenerValue_value] = next;
            this[LatestEventListenerValue_hasValue] = true;
            const isReady = values[Array_every](pick(LatestEventListenerValue_hasValue));
            if (!isReady) {
                return;
            }
            const value = pipe(values, ReadonlyArray.map(pick(LatestEventListenerValue_value)));
            delegate[EventListenerLike_notify](value);
            if (mode === "combine-latest") {
                return;
            }
            for (const sub of values) {
                sub[LatestEventListenerValue_hasValue] = false;
                sub[LatestEventListenerValue_value] = none;
            }
        },
    })));
})();
export default LatestEventListenerMixin;
