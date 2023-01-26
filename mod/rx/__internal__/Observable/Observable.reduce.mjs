/// <reference types="./Observable.reduce.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import StatefulContainer$reduce from '../../../containers/__internal__/StatefulContainer/StatefulContainer.reduce.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$reduceMixin from '../Sink/Sink.reduceMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = Sink$reduceMixin(ReadonlyArray$toRunnableObservable());
    const typedObserverMixin = Observer$mixin();
    const createReduceObserver = createInstanceFactory(mix(include(typedObserverMixin, typedReduceSinkMixin), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);
        return instance;
    }));
    return pipe(createReduceObserver, StatefulContainer$reduce(Observable$liftEnumerableOperatorT));
})();

export { Observable$reduce as default };
