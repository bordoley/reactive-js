/// <reference types="./Sink.scanMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe, returns, } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
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
export default Sink_scanMixin;
