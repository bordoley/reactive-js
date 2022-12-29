/// <reference types="./ObservableLike.takeFirst.d.ts" />
import { createInstanceFactory, mixin, include, init } from '../../../__internal__/mixins.mjs';
import { liftEnumerableObservableT } from '../../../__internal__/rx/ObservableLike.lift.mjs';
import takeFirst$1 from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import observerMixin from '../ObserverLike/ObserverLike.mixin.mjs';
import takeFirstMixin from '../SinkLike/SinkLike.takeFirstMixin.mjs';

const takeFirst = /*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        const typedTakeFirstSinkMixin = takeFirstMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedObserverMixin, typedTakeFirstSinkMixin), function TakeFirstObserver(instance, delegate, takeCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeFirstSinkMixin, instance, delegate, takeCount);
            return instance;
        }));
    })();
    return pipe(createTakeFirstObserver, takeFirst$1(liftEnumerableObservableT));
})();

export { takeFirst as default };
