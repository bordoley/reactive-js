/// <reference types="./Observable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        const typedTakeWhileSinkMixin = Sink_takeWhileMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedTakeWhileSinkMixin), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeWhileSinkMixin, instance, delegate, predicate, inclusive);
            return instance;
        }, props({}), Observer_decorateNotifyForDev(typedTakeWhileSinkMixin)));
    })();
    return pipe(createTakeWhileObserver, StatefulContainer_takeWhile(Observable_liftEnumerableOperator));
})();
export default Observable_takeWhile;
