/// <reference types="./ObservableLike.someSatisfy.d.ts" />
import { mix, include, init, createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__someSatisfyMixin from '../SinkLike/SinkLike.someSatisfyMixin.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';

const ObservableLike__someSatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    const typedSomeSatisfySinkMixin = SinkLike__someSatisfyMixin(ReadonlyArrayLike__toRunnableObservable());
    const someSatisfyObserverMixin = mix(include(typedSomeSatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), ObservableLike__lift(true, true));
})();

export { ObservableLike__someSatisfy as default };
