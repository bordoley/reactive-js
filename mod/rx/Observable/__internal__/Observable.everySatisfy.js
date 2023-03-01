/// <reference types="./Observable.everySatisfy.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { partial, pipe } from "../../../functions.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_everySatisfyMixin from "../../Sink/__internal__/Sink.everySatisfyMixin.js";
import Observable_lift from "./Observable.lift.js";
const Observable_everySatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const typedEverySatisfySinkMixin = Observer_everySatisfyMixin(ReadonlyArray_toRunnable());
    const everySatisfyObserverMixin = mix(include(typedEverySatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);
        return instance;
    }, props({}), Observer_decorateNotifyForDev(typedEverySatisfySinkMixin));
    return (predicate) => pipe(createInstanceFactory(everySatisfyObserverMixin), partial(predicate), Observable_lift(true, true));
})();
export default Observable_everySatisfy;
