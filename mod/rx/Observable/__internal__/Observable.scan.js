/// <reference types="./Observable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ScanObserver_acc, __ScanObserver_reducer, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.internal.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__ScanObserver_reducer] = reducer;
            try {
                const acc = initialValue();
                instance[__ScanObserver_acc] = acc;
            }
            catch (e) {
                instance[DisposableLike_dispose](error(e));
            }
            return instance;
        }, props({
            [__ScanObserver_reducer]: none,
            [__ScanObserver_acc]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const nextAcc = this[__ScanObserver_reducer](this[__ScanObserver_acc], next);
                this[__ScanObserver_acc] = nextAcc;
                this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
            },
        }));
    })();
    return ((reducer, initialValue) => pipe(createScanObserver, partial(reducer, initialValue), Enumerable_lift));
})();
export default Observable_scan;
