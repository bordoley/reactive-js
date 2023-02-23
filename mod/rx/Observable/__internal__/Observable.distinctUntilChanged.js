/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        const typedDistinctUntilChangedSinkMixin = Sink_distinctUntilChangedMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);
            return instance;
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, StatefulContainer_distinctUntilChanged(Observable_liftEnumerableOperator));
})();
export default Observable_distinctUntilChanged;
