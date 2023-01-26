/// <reference types="./Observable.takeLast.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import StatefulContainer$takeLast from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$takeLastMixin from '../Sink/Sink.takeLastMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$takeLast = 
/*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = Sink$takeLastMixin(ReadonlyArray$toRunnableObservable());
    const typedObserverMixin = Observer$mixin();
    const createTakeLastObserver = createInstanceFactory(mix(include(typedObserverMixin, typedTakeLastSinkMixin), function TakeLastObserver(instance, delegate, takeCount) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeLastSinkMixin, instance, delegate, takeCount);
        return instance;
    }));
    return pipe(createTakeLastObserver, StatefulContainer$takeLast(Observable$liftEnumerableOperatorT));
})();

export { Observable$takeLast as default };
