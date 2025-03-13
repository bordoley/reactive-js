/// <reference types="./Observable.scan.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const ScanObserver_acc = Symbol("ScanObserver_acc");
const ScanObserver_reducer = Symbol("ScanObserver_reducer");
const createScanObserver = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function ScanObserver(delegate, reducer, initialValue) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[ScanObserver_reducer] = reducer;
        try {
            this[ScanObserver_acc] = initialValue();
        }
        catch (e) {
            this[DisposableLike_dispose](error(e));
        }
        return this;
    }, props({
        [ScanObserver_acc]: none,
        [ScanObserver_reducer]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            const nextAcc = this[ScanObserver_reducer](this[ScanObserver_acc], next);
            this[ScanObserver_acc] = nextAcc;
            return (delegate?.[LiftedObserverLike_notify]?.(nextAcc) ??
                delegate[QueueableLike_enqueue](nextAcc));
        },
    }));
})();
const Observable_scan = (reducer, initialValue) => pipe((createScanObserver), partial(reducer, initialValue), Observable_liftPureDeferred);
export default Observable_scan;
