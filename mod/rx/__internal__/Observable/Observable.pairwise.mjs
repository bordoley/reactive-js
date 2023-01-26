/// <reference types="./Observable.pairwise.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, returns } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$pairwiseMixin from '../Sink/Sink.pairwiseMixin.mjs';
import Observable$lift from './Observable.lift.mjs';

const Observable$pairwise = 
/*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        const typedPairwiseSinkMixin = Sink$pairwiseMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedPairwiseSinkMixin), function PairwiseObserver(instance, delegate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedPairwiseSinkMixin, instance, delegate);
            return instance;
        }));
    })();
    return pipe(createPairwiseObserver, Observable$lift(true), returns);
})();

export { Observable$pairwise as default };
