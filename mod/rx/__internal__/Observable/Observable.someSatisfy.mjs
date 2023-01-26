/// <reference types="./Observable.someSatisfy.d.ts" />
import { mix, include, init, createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$someSatisfyMixin from '../Sink/Sink.someSatisfyMixin.mjs';
import Observable$lift from './Observable.lift.mjs';

const Observable$someSatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer$mixin();
    const typedSomeSatisfySinkMixin = Sink$someSatisfyMixin(ReadonlyArray$toRunnableObservable());
    const someSatisfyObserverMixin = mix(include(typedSomeSatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), Observable$lift(true, true));
})();

export { Observable$someSatisfy as default };
