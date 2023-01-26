/// <reference types="./Observable.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$takeWhile from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$takeWhileMixin from '../Sink/Sink.takeWhileMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        const typedTakeWhileSinkMixin = Sink$takeWhileMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedTakeWhileSinkMixin), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeWhileSinkMixin, instance, delegate, predicate, inclusive);
            return instance;
        }));
    })();
    return pipe(createTakeWhileObserver, StatefulContainer$takeWhile(Observable$liftEnumerableOperatorT));
})();

export { Observable$takeWhile as default };
