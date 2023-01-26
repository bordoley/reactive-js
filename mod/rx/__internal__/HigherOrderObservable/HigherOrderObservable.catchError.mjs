/// <reference types="./HigherOrderObservable.catchError.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$catchErrorMixin from '../Sink/Sink.catchErrorMixin.mjs';

const HigherOrderObservable$catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = Sink$catchErrorMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedCatchErrorSink, typedObserverMixin), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            init(typedObserverMixin, instance, Observer$getScheduler(delegate));
            return instance;
        }));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};

export { HigherOrderObservable$catchError as default };
