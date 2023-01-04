/// <reference types="./ObservableLike.throwIfEmpty.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__throwIfEmpty from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__throwIfEmptyMixin from '../SinkLike/SinkLike.throwIfEmptyMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__throwIfEmpty = 
/*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        const typedThrowIfEmptySinkMixin = SinkLike__throwIfEmptyMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedThrowIfEmptySinkMixin), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);
            return instance;
        }));
    })();
    return pipe(createThrowIfEmptyObserver, StatefulContainerLike__throwIfEmpty(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__throwIfEmpty as default };
