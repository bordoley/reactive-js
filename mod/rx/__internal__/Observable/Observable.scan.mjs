/// <reference types="./Observable.scan.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$scan from '../../../containers/__internal__/StatefulContainer/StatefulContainer.scan.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$scanMixin from '../Sink/Sink.scanMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        const typedScanSinkMixin = Sink$scanMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedScanSinkMixin), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedScanSinkMixin, instance, delegate, reducer, initialValue);
            return instance;
        }));
    })();
    return pipe(createScanObserver, StatefulContainer$scan(Observable$liftEnumerableOperatorT));
})();

export { Observable$scan as default };
