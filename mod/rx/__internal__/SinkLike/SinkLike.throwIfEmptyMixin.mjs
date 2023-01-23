/// <reference types="./SinkLike.throwIfEmptyMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, error } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import SinkLike__notify from './SinkLike.notify.mjs';

const SinkLike__throwIfEmptyMixin = /*@__PURE__*/ (() => {
    const ThrowIfEmptySink_private_isEmpty = Symbol("ThrowIfEmptySink_private_isEmpty");
    return returns(mix(include(DisposableLike__mixin), function ThrowIfEmptySink(instance, delegate, factory) {
        init(DisposableLike__mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
            let err = none;
            if (instance[ThrowIfEmptySink_private_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            pipe(delegate, DisposableLike__dispose(err));
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [ThrowIfEmptySink_private_isEmpty]: true,
    }), {
        [SinkLike_notify](next) {
            this[ThrowIfEmptySink_private_isEmpty] = false;
            pipe(this[DelegatingSinkLike_delegate], SinkLike__notify(next));
        },
    }));
})();

export { SinkLike__throwIfEmptyMixin as default };
