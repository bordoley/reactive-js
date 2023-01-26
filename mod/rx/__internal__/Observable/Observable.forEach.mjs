/// <reference types="./Observable.forEach.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$forEach from '../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import { Sink$forEachMixin } from '../Sink/Sink.forEachMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$forEach = /*@__PURE__*/ (() => {
    const createForEachObserver = (() => {
        const typedForEachSinkMixin = Sink$forEachMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedForEachSinkMixin), function ForEachObserver(instance, delegate, effect) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedForEachSinkMixin, instance, delegate, effect);
            return instance;
        }));
    })();
    return pipe(createForEachObserver, StatefulContainer$forEach(Observable$liftEnumerableOperatorT));
})();

export { Observable$forEach as default };
