/// <reference types="./Observable.everySatisfy.d.ts" />
import { mix, include, init, createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$everySatisfyMixin from '../Sink/Sink.everySatisfyMixin.mjs';
import Observable$lift from './Observable.lift.mjs';

const Observable$everySatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer$mixin();
    const typedEverySatisfySinkMixin = Sink$everySatisfyMixin(ReadonlyArray$toRunnableObservable());
    const everySatisfyObserverMixin = mix(include(typedEverySatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(everySatisfyObserverMixin), partial(predicate), Observable$lift(true, true));
})();

export { Observable$everySatisfy as default };
