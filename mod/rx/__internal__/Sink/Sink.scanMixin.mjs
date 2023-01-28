/// <reference types="./Sink.scanMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, error, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_scanMixin = /*@__PURE__*/ (() => {
    const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
    const ScanSink_private_acc = Symbol("ScanSink_private_acc");
    return returns(mix(include(Disposable_delegatingMixin), function ScanSink(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ScanSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ScanSink_private_acc] = acc;
        }
        catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
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
            this[DelegatingSinkLike_delegate][SinkLike_notify](nextAcc);
        },
    }));
})();

export { Sink_scanMixin as default };
