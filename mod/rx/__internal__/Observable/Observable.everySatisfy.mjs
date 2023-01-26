/// <reference types="./Observable.everySatisfy.d.ts" />
import { mix, include, init, createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_everySatisfyMixin from '../Sink/Sink.everySatisfyMixin.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_everySatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const typedEverySatisfySinkMixin = Sink_everySatisfyMixin(ReadonlyArray_toRunnableObservable());
    const everySatisfyObserverMixin = mix(include(typedEverySatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(everySatisfyObserverMixin), partial(predicate), Observable_lift(true, true));
})();

export { Observable_everySatisfy as default };
