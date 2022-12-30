/// <reference types="./ObservableLike.forEach.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { liftEnumerableObservableT } from '../../../__internal__/rx/ObservableLike.lift.mjs';
import forEach$1 from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import observerMixin from '../ObserverLike/ObserverLike.mixin.mjs';
import { forEachMixin } from '../SinkLike/SinkLike.forEachMixin.mjs';

const forEach = /*@__PURE__*/ (() => {
    const createForEachObserver = (() => {
        const typedForEachSinkMixin = forEachMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedForEachSinkMixin), function ForEachObserver(instance, delegate, effect) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedForEachSinkMixin, instance, delegate, effect);
            return instance;
        }));
    })();
    return pipe(createForEachObserver, forEach$1(liftEnumerableObservableT));
})();

export { forEach as default };
