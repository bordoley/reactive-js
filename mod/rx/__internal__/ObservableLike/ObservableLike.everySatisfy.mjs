/// <reference types="./ObservableLike.everySatisfy.d.ts" />
import { mix, include, init, createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__everySatisfyMixin from '../SinkLike/SinkLike.everySatisfyMixin.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';

const ObservableLike__everySatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    const typedEverySatisfySinkMixin = SinkLike__everySatisfyMixin(ReadonlyArrayLike__toRunnableObservable());
    const everySatisfyObserverMixin = mix(include(typedEverySatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(everySatisfyObserverMixin), partial(predicate), ObservableLike__lift(true, true));
})();

export { ObservableLike__everySatisfy as default };
