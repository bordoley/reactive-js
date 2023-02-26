/// <reference types="./Observable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        const typedScanSinkMixin = Sink_scanMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedScanSinkMixin), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedScanSinkMixin, instance, delegate, reducer, initialValue);
            return instance;
        }, props({}), Observer_decorateNotifyForDev(typedScanSinkMixin)));
    })();
    return pipe(createScanObserver, StatefulContainer_scan(Observable_liftEnumerableOperator));
})();
export default Observable_scan;
