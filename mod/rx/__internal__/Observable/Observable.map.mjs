/// <reference types="./Observable.map.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$map from '../../../containers/__internal__/StatefulContainer/StatefulContainer.map.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import { Sink$mapMixin } from '../Sink/Sink.mapMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$map = /*@__PURE__*/ (() => {
    const createMapObserver = (() => {
        const typedMapSinkMixin = Sink$mapMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedMapSinkMixin), function MapObserver(instance, delegate, mapper) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedMapSinkMixin, instance, delegate, mapper);
            return instance;
        }));
    })();
    return pipe(createMapObserver, StatefulContainer$map(Observable$liftEnumerableOperatorT));
})();

export { Observable$map as default };
