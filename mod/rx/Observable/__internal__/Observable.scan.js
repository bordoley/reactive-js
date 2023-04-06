/// <reference types="./Observable.scan.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ScanObserver_acc, ScanObserver_reducer, } from "../../../__internal__/symbols.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
const Observable_scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(Disposable_delegatingMixin(), instance, delegate);
            initObserverMixinFromDelegate(instance, delegate);
            instance[ScanObserver_reducer] = reducer;
            try {
                const acc = initialValue();
                instance[ScanObserver_acc] = acc;
            }
            catch (e) {
                instance[DisposableLike_dispose](error(e));
            }
            return instance;
        }, props({
            [ScanObserver_reducer]: none,
            [ScanObserver_acc]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const nextAcc = this[ScanObserver_reducer](this[ScanObserver_acc], next);
                this[ScanObserver_acc] = nextAcc;
                this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
            },
        }));
    })();
    return ((reducer, initialValue) => pipe(createScanObserver, partial(reducer, initialValue), Enumerable_lift));
})();
export default Observable_scan;
