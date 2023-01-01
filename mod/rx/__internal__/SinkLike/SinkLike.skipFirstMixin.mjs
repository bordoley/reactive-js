/// <reference types="./SinkLike.skipFirstMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, none, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const SinkLike__skipFirstMixin = /*@__PURE__*/ (() => {
    const SkipFirstSink_private_skipCount = Symbol("SkipFirstSink_private_skipCount");
    const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");
    return returns(mix(include(DisposableLike__delegatingMixin), function SkipFirstSink(instance, delegate, skipCount) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
                pipe(this[DelegatingSinkLike_delegate], notify(next));
            }
        },
    }));
})();

export { SinkLike__skipFirstMixin as default };
