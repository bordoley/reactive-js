/// <reference types="./HigherOrderObservable.catchError.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Observer_getScheduler from '../../Observer/__internal__/Observer.getScheduler.mjs';
import Observer_mixin from '../../Observer/__internal__/Observer.mixin.mjs';
import Sink_catchErrorMixin from '../../Sink/__internal__/Sink.catchErrorMixin.mjs';

const HigherOrderObservable_catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = Sink_catchErrorMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedCatchErrorSink, typedObserverMixin), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            return instance;
        }));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};

export { HigherOrderObservable_catchError as default };
