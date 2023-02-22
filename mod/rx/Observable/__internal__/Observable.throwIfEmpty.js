/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_throwIfEmptyMixin from "../../Sink/__internal__/Sink.throwIfEmptyMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";
const Observable_throwIfEmpty = 
/*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        const typedThrowIfEmptySinkMixin = Sink_throwIfEmptyMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedThrowIfEmptySinkMixin), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);
            return instance;
        }));
    })();
    return pipe(createThrowIfEmptyObserver, StatefulContainer_throwIfEmpty(Observable_liftEnumerableOperatorT));
})();
export default Observable_throwIfEmpty;
