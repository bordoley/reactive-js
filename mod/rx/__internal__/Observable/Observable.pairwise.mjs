/// <reference types="./Observable.pairwise.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, returns } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_pairwiseMixin from '../Sink/Sink.pairwiseMixin.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_pairwise = 
/*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        const typedPairwiseSinkMixin = Sink_pairwiseMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedPairwiseSinkMixin), function PairwiseObserver(instance, delegate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedPairwiseSinkMixin, instance, delegate);
            return instance;
        }));
    })();
    return pipe(createPairwiseObserver, Observable_lift(true), returns);
})();

export { Observable_pairwise as default };
