/// <reference types="./Sink.scanMixin.d.ts" />
import { mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns, pipe, error, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';

const Sink_scanMixin = /*@__PURE__*/ (() => {
    const ScanSinkMixin_reducer = Symbol("ScanSinkMixin_reducer");
    const ScanSinkMixin_acc = Symbol("ScanSinkMixin_acc");
    return returns(mix(include(Disposable_delegatingMixin()), function ScanSinkMixin(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[ScanSinkMixin_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ScanSinkMixin_acc] = acc;
        }
        catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
        }
        return instance;
    }, props({
        [ScanSinkMixin_reducer]: none,
        [ScanSinkMixin_acc]: none,
    }), {
        [SinkLike_notify](next) {
            const nextAcc = this[ScanSinkMixin_reducer](this[ScanSinkMixin_acc], next);
            this[ScanSinkMixin_acc] = nextAcc;
            this[DelegatingLike_delegate][SinkLike_notify](nextAcc);
        },
    }));
})();

export { Sink_scanMixin as default };
