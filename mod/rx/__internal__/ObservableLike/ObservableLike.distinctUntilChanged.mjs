/// <reference types="./ObservableLike.distinctUntilChanged.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__distinctUntilChanged from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__observerMixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__distinctUntilChangedMixin from '../SinkLike/SinkLike.distinctUntilChangedMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        const typedDistinctUntilChangedSinkMixin = SinkLike__distinctUntilChangedMixin();
        const typedObserverMixin = ObserverLike__observerMixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);
            return instance;
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, StatefulContainerLike__distinctUntilChanged(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__distinctUntilChanged as default };
