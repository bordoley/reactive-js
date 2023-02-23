/// <reference types="./Observable.reduce.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import StatefulContainer_reduce from "../../../containers/StatefulContainer/__internal__/StatefulContainer.reduce.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_reduceMixin from "../../Sink/__internal__/Sink.reduceMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = Sink_reduceMixin(ReadonlyArray_toRunnableObservable());
    const typedObserverMixin = Observer_mixin();
    const createReduceObserver = createInstanceFactory(mix(include(typedObserverMixin, typedReduceSinkMixin), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);
        return instance;
    }));
    return pipe(createReduceObserver, StatefulContainer_reduce(Observable_liftEnumerableOperator));
})();
export default Observable_reduce;
