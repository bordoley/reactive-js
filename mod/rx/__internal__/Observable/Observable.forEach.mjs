/// <reference types="./Observable.forEach.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_forEach from '../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import { Sink_forEachMixin } from '../Sink/Sink.forEachMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_forEach = /*@__PURE__*/ (() => {
    const createForEachObserver = (() => {
        const typedForEachSinkMixin = Sink_forEachMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedForEachSinkMixin), function ForEachObserver(instance, delegate, effect) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedForEachSinkMixin, instance, delegate, effect);
            return instance;
        }));
    })();
    return pipe(createForEachObserver, StatefulContainer_forEach(Observable_liftEnumerableOperatorT));
})();

export { Observable_forEach as default };
