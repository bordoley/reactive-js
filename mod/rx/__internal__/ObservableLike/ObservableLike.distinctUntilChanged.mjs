/// <reference types="./ObservableLike.distinctUntilChanged.d.ts" />
import { createInstanceFactory, mixin, include, init } from '../../../__internal__/mixins.mjs';
import { liftEnumerableObservableT } from '../../../__internal__/rx/ObservableLike.lift.mjs';
import distinctUntilChanged$1 from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import observerMixin from '../ObserverLike/ObserverLike.mixin.mjs';
import distinctUntilChangedMixin from '../SinkLike/SinkLike.distinctUntilChangedMixin.mjs';

const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        const typedDistinctUntilChangedSinkMixin = distinctUntilChangedMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);
            return instance;
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, distinctUntilChanged$1(liftEnumerableObservableT));
})();

export { distinctUntilChanged as default };
