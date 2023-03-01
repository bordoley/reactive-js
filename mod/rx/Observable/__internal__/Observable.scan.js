/// <reference types="./Observable.scan.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        const ScanObserverMixin_reducer = Symbol("ScanObserverMixin_reducer");
        const ScanObserverMixin_acc = Symbol("ScanObserverMixin_acc");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function ScanObserverMixin(instance, delegate, reducer, initialValue) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[ScanObserverMixin_reducer] = reducer;
            try {
                const acc = initialValue();
                instance[ScanObserverMixin_acc] = acc;
            }
            catch (e) {
                pipe(instance, Disposable_dispose(error(e)));
            }
            return instance;
        }, props({
            [ScanObserverMixin_reducer]: none,
            [ScanObserverMixin_acc]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const nextAcc = this[ScanObserverMixin_reducer](this[ScanObserverMixin_acc], next);
                this[ScanObserverMixin_acc] = nextAcc;
                this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
            },
        }));
    })();
    return ((reducer, initialValue) => pipe(createScanObserver, partial(reducer, initialValue), Observable_liftEnumerableOperator));
})();
export default Observable_scan;
