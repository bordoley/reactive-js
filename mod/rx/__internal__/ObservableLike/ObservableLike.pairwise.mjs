/// <reference types="./ObservableLike.pairwise.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, returns } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__pairwiseMixin from '../SinkLike/SinkLike.pairwiseMixin.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';

const ObservableLike__pairwise = 
/*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        const typedPairwiseSinkMixin = SinkLike__pairwiseMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedPairwiseSinkMixin), function PairwiseObserver(instance, delegate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedPairwiseSinkMixin, instance, delegate);
            return instance;
        }));
    })();
    return pipe(createPairwiseObserver, ObservableLike__lift(true), returns);
})();

export { ObservableLike__pairwise as default };
