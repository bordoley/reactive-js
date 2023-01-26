/// <reference types="./Observable.distinctUntilChanged.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$distinctUntilChanged from '../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$distinctUntilChangedMixin from '../Sink/Sink.distinctUntilChangedMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        const typedDistinctUntilChangedSinkMixin = Sink$distinctUntilChangedMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);
            return instance;
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, StatefulContainer$distinctUntilChanged(Observable$liftEnumerableOperatorT));
})();

export { Observable$distinctUntilChanged as default };
