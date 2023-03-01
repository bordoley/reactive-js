/// <reference types="./HigherOrderObservable.catchError.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Sink_catchErrorMixin from "../../Sink/__internal__/Sink.catchErrorMixin.js";
const HigherOrderObservable_catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = Sink_catchErrorMixin();
        return createInstanceFactory(mix(include(typedCatchErrorSink), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            return instance;
        }, props({}), Observer_decorateNotifyForDev(typedCatchErrorSink)));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};
export default HigherOrderObservable_catchError;
