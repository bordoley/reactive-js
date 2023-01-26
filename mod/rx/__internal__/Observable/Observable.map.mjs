/// <reference types="./Observable.map.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_map from '../../../containers/__internal__/StatefulContainer/StatefulContainer.map.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import { Sink_mapMixin } from '../Sink/Sink.mapMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_map = /*@__PURE__*/ (() => {
    const createMapObserver = (() => {
        const typedMapSinkMixin = Sink_mapMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedMapSinkMixin), function MapObserver(instance, delegate, mapper) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedMapSinkMixin, instance, delegate, mapper);
            return instance;
        }));
    })();
    return pipe(createMapObserver, StatefulContainer_map(Observable_liftEnumerableOperatorT));
})();

export { Observable_map as default };
