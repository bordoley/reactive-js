/// <reference types="./DelegatingAsyncEnumerator.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, returns } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable } from '../../../rx.mjs';
import { DispatcherLike_dispatch, DispatcherLike_scheduler } from '../../../scheduling.mjs';
import Dispatcher_dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Dispatcher_getScheduler from '../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler.mjs';

const DelegatingAsyncEnumerator_mixin = /*@__PURE__*/ (() => {
    return pipe(mix(function DelegatingAsyncEnumerator(instance, delegate) {
        instance.delegate = delegate;
        return instance;
    }, props({
        delegate: none,
    }), {
        [DispatcherLike_dispatch](_) {
            pipe(this.delegate, Dispatcher_dispatch(none));
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return Dispatcher_getScheduler(this.delegate);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move]() {
            pipe(this, Dispatcher_dispatch(none));
        },
    }), returns);
})();

export { DelegatingAsyncEnumerator_mixin as default };
