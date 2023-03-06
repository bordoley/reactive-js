/// <reference types="./Stream.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return pipe(mix(include(delegatingMixin()), function DelegatingStreamMixin(instance, delegate) {
        init(delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [QueueLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueLike_count];
        },
        [QueueLike_push](next) {
            pipe(this[DelegatingLike_delegate], Queue_push(next));
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
    }), returns);
})();
export default Stream_delegatingMixin;
