/// <reference types="./Observable.forEach.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";
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
export default Observable_forEach;
