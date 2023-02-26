/// <reference types="./HigherOrderObservable.catchError.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_catchErrorMixin from "../../Sink/__internal__/Sink.catchErrorMixin.js";
const HigherOrderObservable_catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = Sink_catchErrorMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedCatchErrorSink, typedObserverMixin), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            return instance;
        }, props({}), Observer_decorateNotifyForDev(typedCatchErrorSink)));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};
export default HigherOrderObservable_catchError;
