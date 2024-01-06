/// <reference types="./Observable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const ScanObserver_acc = Symbol("ScanObserver_acc");
const ScanObserver_reducer = Symbol("ScanObserver_reducer");
const Observer_createScanObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DelegatingDisposableMixin(), ObserverMixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
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
        [ScanObserver_acc]: none,
        [ScanObserver_reducer]: none,
    }), {
        [SinkLike_notify](next) {
            const nextAcc = this[ScanObserver_reducer](this[ScanObserver_acc], next);
            this[ScanObserver_acc] = nextAcc;
            this[DelegatingDisposableLike_delegate][SinkLike_notify](nextAcc);
        },
    })));
})();
const Observable_scan = (reducer, initialValue) => pipe((Observer_createScanObserver), partial(reducer, initialValue), Observable_liftPureDeferred);
export default Observable_scan;
