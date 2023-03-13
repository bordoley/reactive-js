/// <reference types="./Stream.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import { QueueableLike_count, QueueableLike_push } from "../../../util.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return pipe(mix(include(delegatingMixin()), function DelegatingStreamMixin(instance, delegate) {
        init(delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [QueueableLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_count];
        },
        [QueueableLike_push](next) {
            this[DelegatingLike_delegate][QueueableLike_push](next);
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_complete]() {
            this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
    }), returns);
})();
export default Stream_delegatingMixin;
