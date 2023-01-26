/// <reference types="./Observable.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeWhile from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_takeWhileMixin from '../Sink/Sink.takeWhileMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        const typedTakeWhileSinkMixin = Sink_takeWhileMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedTakeWhileSinkMixin), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeWhileSinkMixin, instance, delegate, predicate, inclusive);
            return instance;
        }));
    })();
    return pipe(createTakeWhileObserver, StatefulContainer_takeWhile(Observable_liftEnumerableOperatorT));
})();

export { Observable_takeWhile as default };
