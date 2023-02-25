/// <reference types="./DelegatingAsyncEnumerator.mixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { SourceLike_move } from "../../../ix.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
const DelegatingAsyncEnumerator_mixin = /*@__PURE__*/ (() => {
    return pipe(mix(include(delegatingMixin()), function DelegatingAsyncEnumeratorMixin(instance, delegate) {
        init(delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [QueueLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueLike_count];
        },
        [QueueLike_push](_) {
            pipe(this[DelegatingLike_delegate], Queue_push(none));
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return Dispatcher_getScheduler(this[DelegatingLike_delegate]);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move]() {
            pipe(this, Queue_push(none));
        },
    }), returns);
})();
export default DelegatingAsyncEnumerator_mixin;
