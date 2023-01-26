/// <reference types="./Observable.keep.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_keepMixin from '../Sink/Sink.keepMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_keep = /*@__PURE__*/ (() => {
    const createKeepObserver = (() => {
        const typedKeepSinkMixin = Sink_keepMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedKeepSinkMixin), function KeepObserver(instance, delegate, predicate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedKeepSinkMixin, instance, delegate, predicate);
            return instance;
        }));
    })();
    return pipe(createKeepObserver, StatefulContainer_keep(Observable_liftEnumerableOperatorT));
})();

export { Observable_keep as default };
