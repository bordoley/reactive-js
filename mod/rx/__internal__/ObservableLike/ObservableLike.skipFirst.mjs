/// <reference types="./ObservableLike.skipFirst.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__skipFirst from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__skipFirstMixin from '../SinkLike/SinkLike.skipFirstMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__skipFirst = 
/*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        const typedSkipFirstSinkMixin = SinkLike__skipFirstMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedSkipFirstSinkMixin), function SkipFirstObserver(instance, delegate, skipCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedSkipFirstSinkMixin, instance, delegate, skipCount);
            return instance;
        }));
    })();
    return pipe(createSkipFirstObserver, StatefulContainerLike__skipFirst(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__skipFirst as default };
