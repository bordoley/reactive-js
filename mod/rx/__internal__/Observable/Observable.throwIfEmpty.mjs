/// <reference types="./Observable.throwIfEmpty.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$throwIfEmpty from '../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$throwIfEmptyMixin from '../Sink/Sink.throwIfEmptyMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$throwIfEmpty = 
/*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        const typedThrowIfEmptySinkMixin = Sink$throwIfEmptyMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedThrowIfEmptySinkMixin), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);
            return instance;
        }));
    })();
    return pipe(createThrowIfEmptyObserver, StatefulContainer$throwIfEmpty(Observable$liftEnumerableOperatorT));
})();

export { Observable$throwIfEmpty as default };
