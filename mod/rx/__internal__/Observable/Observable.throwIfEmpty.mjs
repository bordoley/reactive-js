/// <reference types="./Observable.throwIfEmpty.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_throwIfEmpty from '../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_throwIfEmptyMixin from '../Sink/Sink.throwIfEmptyMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_throwIfEmpty = 
/*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        const typedThrowIfEmptySinkMixin = Sink_throwIfEmptyMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedThrowIfEmptySinkMixin), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);
            return instance;
        }));
    })();
    return pipe(createThrowIfEmptyObserver, StatefulContainer_throwIfEmpty(Observable_liftEnumerableOperatorT));
})();

export { Observable_throwIfEmpty as default };
