/// <reference types="./Observable.scan.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../computations/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../computations/__mixins__/ObserverMixin.js";
import { ObserverLike_notify } from "../../../computations.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const ScanObserver_acc = Symbol("ScanObserver_acc");
const ScanObserver_reducer = Symbol("ScanObserver_reducer");
const createScanObserver = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin(), ObserverMixin(), LiftedObserverMixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        init(LiftedObserverMixin(), instance, delegate);
        instance[ScanObserver_reducer] = reducer;
        try {
            instance[ScanObserver_acc] = initialValue();
        }
        catch (e) {
            instance[DisposableLike_dispose](error(e));
        }
        return instance;
    }, props({
        [ScanObserver_acc]: none,
        [ScanObserver_reducer]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            const nextAcc = this[ScanObserver_reducer](this[ScanObserver_acc], next);
            this[ScanObserver_acc] = nextAcc;
            this[LiftedObserverLike_delegate][ObserverLike_notify](nextAcc);
        }),
    });
})();
const Observable_scan = (reducer, initialValue) => pipe((createScanObserver), partial(reducer, initialValue), Observable_liftPureDeferred);
export default Observable_scan;
