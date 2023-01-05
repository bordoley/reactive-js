/// <reference types="./DelegatingAsyncEnumeratorLike.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, returns } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable } from '../../../rx.mjs';
import { DispatcherLike_dispatch, DispatcherLike_scheduler } from '../../../scheduling.mjs';
import DispatcherLike__dispatch from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch.mjs';
import DispatcherLike__getScheduler from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.getScheduler.mjs';

const DelegatingAsyncEnumerator__mixin = /*@__PURE__*/ (() => {
    return pipe(mix(function DelegatingAsyncEnumerator(instance, delegate) {
        instance.delegate = delegate;
        return instance;
    }, props({
        delegate: none,
    }), {
        [DispatcherLike_dispatch](_) {
            pipe(this.delegate, DispatcherLike__dispatch(none));
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return DispatcherLike__getScheduler(this.delegate);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move]() {
            pipe(this, DispatcherLike__dispatch(none));
        },
    }), returns);
})();

export { DelegatingAsyncEnumerator__mixin as default };
