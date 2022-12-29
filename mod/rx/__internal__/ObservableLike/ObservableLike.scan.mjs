/// <reference types="./ObservableLike.scan.d.ts" />
import { createInstanceFactory, mixin, include, init } from '../../../__internal__/mixins.mjs';
import { liftEnumerableObservableT } from '../../../__internal__/rx/ObservableLike.lift.mjs';
import scan$1 from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import observerMixin from '../ObserverLike/ObserverLike.mixin.mjs';
import scanMixin from '../SinkLike/SinkLike.scanMixin.mjs';

const scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        const typedScanSinkMixin = scanMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedObserverMixin, typedScanSinkMixin), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedScanSinkMixin, instance, delegate, reducer, initialValue);
            return instance;
        }));
    })();
    return pipe(createScanObserver, scan$1(liftEnumerableObservableT));
})();

export { scan as default };
