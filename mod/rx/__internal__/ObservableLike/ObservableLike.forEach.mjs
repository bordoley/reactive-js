/// <reference types="./ObservableLike.forEach.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__forEach from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import { SinkLike__forEachMixin } from '../SinkLike/SinkLike.forEachMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__forEach = 
/*@__PURE__*/ (() => {
    const createForEachObserver = (() => {
        const typedForEachSinkMixin = SinkLike__forEachMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedForEachSinkMixin), function ForEachObserver(instance, delegate, effect) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedForEachSinkMixin, instance, delegate, effect);
            return instance;
        }));
    })();
    return pipe(createForEachObserver, StatefulContainerLike__forEach(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__forEach as default };
