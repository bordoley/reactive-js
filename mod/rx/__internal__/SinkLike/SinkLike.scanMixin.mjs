/// <reference types="./SinkLike.scanMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, error, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import SinkLike__notify from './SinkLike.notify.mjs';

const SinkLike__scanMixin = /*@__PURE__*/ (() => {
    const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
    const ScanSink_private_acc = Symbol("ScanSink_private_acc");
    return returns(mix(include(DisposableLike__delegatingMixin), function ScanSink(instance, delegate, reducer, initialValue) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ScanSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ScanSink_private_acc] = acc;
        }
        catch (e) {
            pipe(instance, DisposableLike__dispose(error(e)));
        }
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
    }), {
        [SinkLike_notify](next) {
            const nextAcc = this[ScanSink_private_reducer](this[ScanSink_private_acc], next);
            this[ScanSink_private_acc] = nextAcc;
            pipe(this[DelegatingSinkLike_delegate], SinkLike__notify(nextAcc));
        },
    }));
})();

export { SinkLike__scanMixin as default };
