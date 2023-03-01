/// <reference types="./Observable.someSatisfy.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { partial, pipe } from "../../../functions.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_someSatisfyMixin from "../../Sink/__internal__/Sink.someSatisfyMixin.js";
import Observable_lift from "./Observable.lift.js";
const Observable_someSatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const typedSomeSatisfySinkMixin = Sink_someSatisfyMixin(ReadonlyArray_toRunnable());
    const someSatisfyObserverMixin = mix(include(typedSomeSatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    }, props({}), Observer_decorateNotifyForDev(typedSomeSatisfySinkMixin));
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), Observable_lift(true, true));
})();
export default Observable_someSatisfy;
