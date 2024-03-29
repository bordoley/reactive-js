/// <reference types="./Observable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const ScanObserver_acc = Symbol("ScanObserver_acc");
const ScanObserver_reducer = Symbol("ScanObserver_reducer");
const createScanObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DelegatingDisposableMixin(), ObserverMixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
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
        [ObserverLike_notify](next) {
            const nextAcc = this[ScanObserver_reducer](this[ScanObserver_acc], next);
            this[ScanObserver_acc] = nextAcc;
            this[DelegatingDisposableLike_delegate][ObserverLike_notify](nextAcc);
        },
    })));
})();
const Observable_scan = (reducer, initialValue) => pipe((createScanObserver), partial(reducer, initialValue), Observable_liftPureDeferred);
export default Observable_scan;
