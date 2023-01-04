/// <reference types="./ObservableLike.keep.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__keep from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__keepMixin from '../SinkLike/SinkLike.keepMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__keep = /*@__PURE__*/ (() => {
    const createKeepObserver = (() => {
        const typedKeepSinkMixin = SinkLike__keepMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedKeepSinkMixin), function KeepObserver(instance, delegate, predicate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedKeepSinkMixin, instance, delegate, predicate);
            return instance;
        }));
    })();
    return pipe(createKeepObserver, StatefulContainerLike__keep(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__keep as default };
