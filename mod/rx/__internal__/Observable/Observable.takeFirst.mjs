/// <reference types="./Observable.takeFirst.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$takeFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$takeFirstMixin from '../Sink/Sink.takeFirstMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$takeFirst = 
/*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        const typedTakeFirstSinkMixin = Sink$takeFirstMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedTakeFirstSinkMixin), function TakeFirstObserver(instance, delegate, takeCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeFirstSinkMixin, instance, delegate, takeCount);
            return instance;
        }));
    })();
    return pipe(createTakeFirstObserver, StatefulContainer$takeFirst(Observable$liftEnumerableOperatorT));
})();

export { Observable$takeFirst as default };
