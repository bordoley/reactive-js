/// <reference types="./Sink.skipFirstMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink_notify from './Sink.notify.mjs';

const Sink_skipFirstMixin = 
/*@__PURE__*/ (() => {
    const SkipFirstSink_private_skipCount = Symbol("SkipFirstSink_private_skipCount");
    const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");
    return returns(mix(include(Disposable_delegatingMixin), function SkipFirstSink(instance, delegate, skipCount) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[SkipFirstSink_private_skipCount] = skipCount;
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [SkipFirstSink_private_skipCount]: 0,
        [SkipFirstSink_private_count]: 0,
    }), {
        [SinkLike_notify](next) {
            this[SkipFirstSink_private_count]++;
            if (this[SkipFirstSink_private_count] >
                this[SkipFirstSink_private_skipCount]) {
                pipe(this[DelegatingSinkLike_delegate], Sink_notify(next));
            }
        },
    }));
})();

export { Sink_skipFirstMixin as default };
