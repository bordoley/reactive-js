/// <reference types="./Observable.someSatisfy.d.ts" />
import { mix, include, init, createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_someSatisfyMixin from '../Sink/Sink.someSatisfyMixin.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_someSatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const typedSomeSatisfySinkMixin = Sink_someSatisfyMixin(ReadonlyArray_toRunnableObservable());
    const someSatisfyObserverMixin = mix(include(typedSomeSatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), Observable_lift(true, true));
})();

export { Observable_someSatisfy as default };
