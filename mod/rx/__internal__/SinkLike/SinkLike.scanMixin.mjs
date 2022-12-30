/// <reference types="./SinkLike.scanMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { dispose } from '../../../util/DisposableLike.mjs';
import delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const scanMixin = /*@__PURE__*/ (() => {
    const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
    const ScanSink_private_acc = Symbol("ScanSink_private_acc");
    return returns(mix(include(delegatingMixin), function ScanSink(instance, delegate, reducer, initialValue) {
        init(delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ScanSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ScanSink_private_acc] = acc;
        }
        catch (cause) {
            pipe(instance, dispose({ cause }));
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
            pipe(this[DelegatingSinkLike_delegate], notify(nextAcc));
        },
    }));
})();

export { scanMixin as default };
