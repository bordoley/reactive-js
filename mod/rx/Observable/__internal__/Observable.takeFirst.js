/// <reference types="./Observable.takeFirst.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import SinkLike_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeFirst = 
/*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        const typedTakeFirstSinkMixin = SinkLike_takeFirstMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedTakeFirstSinkMixin), function TakeFirstObserver(instance, delegate, takeCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeFirstSinkMixin, instance, delegate, takeCount);
            return instance;
        }));
    })();
    return pipe(createTakeFirstObserver, StatefulContainer_takeFirst(Observable_liftEnumerableOperator));
})();
export default Observable_takeFirst;
