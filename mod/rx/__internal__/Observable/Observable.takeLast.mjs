/// <reference types="./Observable.takeLast.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import StatefulContainer_takeLast from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_takeLastMixin from '../Sink/Sink.takeLastMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_takeLast = 
/*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = Sink_takeLastMixin(ReadonlyArray_toRunnableObservable());
    const typedObserverMixin = Observer_mixin();
    const createTakeLastObserver = createInstanceFactory(mix(include(typedObserverMixin, typedTakeLastSinkMixin), function TakeLastObserver(instance, delegate, takeCount) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeLastSinkMixin, instance, delegate, takeCount);
        return instance;
    }));
    return pipe(createTakeLastObserver, StatefulContainer_takeLast(Observable_liftEnumerableOperatorT));
})();

export { Observable_takeLast as default };
