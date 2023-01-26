/// <reference types="./Observable.takeFirst.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_takeFirstMixin from '../Sink/Sink.takeFirstMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_takeFirst = 
/*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        const typedTakeFirstSinkMixin = Sink_takeFirstMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedTakeFirstSinkMixin), function TakeFirstObserver(instance, delegate, takeCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeFirstSinkMixin, instance, delegate, takeCount);
            return instance;
        }));
    })();
    return pipe(createTakeFirstObserver, StatefulContainer_takeFirst(Observable_liftEnumerableOperatorT));
})();

export { Observable_takeFirst as default };
