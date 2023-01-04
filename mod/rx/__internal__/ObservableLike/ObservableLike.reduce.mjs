/// <reference types="./ObservableLike.reduce.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import StatefulContainerLike__reduce from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__reduceMixin from '../SinkLike/SinkLike.reduceMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__reduce = 
/*@__PURE__*/ (() => {
    const typedReduceSinkMixin = SinkLike__reduceMixin(ReadonlyArrayLike__toRunnableObservable());
    const typedObserverMixin = ObserverLike__mixin();
    const createReduceObserver = createInstanceFactory(mix(include(typedObserverMixin, typedReduceSinkMixin), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);
        return instance;
    }));
    return pipe(createReduceObserver, StatefulContainerLike__reduce(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__reduce as default };
