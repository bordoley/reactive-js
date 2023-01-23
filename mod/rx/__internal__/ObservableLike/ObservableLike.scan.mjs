/// <reference types="./ObservableLike.scan.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__scan from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__scanMixin from '../SinkLike/SinkLike.scanMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        const typedScanSinkMixin = SinkLike__scanMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedScanSinkMixin), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedScanSinkMixin, instance, delegate, reducer, initialValue);
            return instance;
        }));
    })();
    return pipe(createScanObserver, StatefulContainerLike__scan(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__scan as default };
