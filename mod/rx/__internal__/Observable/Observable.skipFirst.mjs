/// <reference types="./Observable.skipFirst.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$skipFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$skipFirstMixin from '../Sink/Sink.skipFirstMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$skipFirst = 
/*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        const typedSkipFirstSinkMixin = Sink$skipFirstMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedSkipFirstSinkMixin), function SkipFirstObserver(instance, delegate, skipCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedSkipFirstSinkMixin, instance, delegate, skipCount);
            return instance;
        }));
    })();
    return pipe(createSkipFirstObserver, StatefulContainer$skipFirst(Observable$liftEnumerableOperatorT));
})();

export { Observable$skipFirst as default };
