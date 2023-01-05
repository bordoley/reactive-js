/// <reference types="./HigherOrderObservableLike.catchError.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, partial } from '../../../functions.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__catchErrorMixin from '../SinkLike/SinkLike.catchErrorMixin.mjs';

const HigherOrderObservableLike__catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = SinkLike__catchErrorMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedCatchErrorSink, typedObserverMixin), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            init(typedObserverMixin, instance, getScheduler(delegate));
            return instance;
        }));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};

export { HigherOrderObservableLike__catchError as default };
