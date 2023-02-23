/// <reference types="./Observable.map.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
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
    return pipe(createMapObserver, StatefulContainer_map(Observable_liftEnumerableOperator));
})();
export default Observable_map;
