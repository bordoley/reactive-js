/// <reference types="./Observable.skipFirst.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer_skipFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_skipFirstMixin from '../Sink/Sink.skipFirstMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_skipFirst = 
/*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        const typedSkipFirstSinkMixin = Sink_skipFirstMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedSkipFirstSinkMixin), function SkipFirstObserver(instance, delegate, skipCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedSkipFirstSinkMixin, instance, delegate, skipCount);
            return instance;
        }));
    })();
    return pipe(createSkipFirstObserver, StatefulContainer_skipFirst(Observable_liftEnumerableOperatorT));
})();

export { Observable_skipFirst as default };
