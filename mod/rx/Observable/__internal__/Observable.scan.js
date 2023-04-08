/// <reference types="./Observable.scan.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ScanObserver_acc, __ScanObserver_reducer, } from "../../../__internal__/symbols.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), delegatingMixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
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
