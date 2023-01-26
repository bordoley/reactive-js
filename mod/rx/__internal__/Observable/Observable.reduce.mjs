/// <reference types="./Observable.reduce.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import StatefulContainer_reduce from '../../../containers/__internal__/StatefulContainer/StatefulContainer.reduce.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_reduceMixin from '../Sink/Sink.reduceMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = Sink_reduceMixin(ReadonlyArray_toRunnableObservable());
    const typedObserverMixin = Observer_mixin();
    const createReduceObserver = createInstanceFactory(mix(include(typedObserverMixin, typedReduceSinkMixin), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);
        return instance;
    }));
    return pipe(createReduceObserver, StatefulContainer_reduce(Observable_liftEnumerableOperatorT));
})();

export { Observable_reduce as default };
