/// <reference types="./Observable.distinctUntilChanged.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_distinctUntilChanged from '../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_distinctUntilChangedMixin from '../Sink/Sink.distinctUntilChangedMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        const typedDistinctUntilChangedSinkMixin = Sink_distinctUntilChangedMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);
            return instance;
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, StatefulContainer_distinctUntilChanged(Observable_liftEnumerableOperatorT));
})();

export { Observable_distinctUntilChanged as default };
