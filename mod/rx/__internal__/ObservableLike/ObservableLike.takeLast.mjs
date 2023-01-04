/// <reference types="./ObservableLike.takeLast.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import StatefulContainerLike__takeLast from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__takeLastMixin from '../SinkLike/SinkLike.takeLastMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__takeLast = 
/*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = SinkLike__takeLastMixin(ReadonlyArrayLike__toRunnableObservable());
    const typedObserverMixin = ObserverLike__mixin();
    const createTakeLastObserver = createInstanceFactory(mix(include(typedObserverMixin, typedTakeLastSinkMixin), function TakeLastObserver(instance, delegate, takeCount) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeLastSinkMixin, instance, delegate, takeCount);
        return instance;
    }));
    return pipe(createTakeLastObserver, StatefulContainerLike__takeLast(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__takeLast as default };
