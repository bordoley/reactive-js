/// <reference types="./Observable.keep.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import StatefulContainer$keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$keepMixin from '../Sink/Sink.keepMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$keep = /*@__PURE__*/ (() => {
    const createKeepObserver = (() => {
        const typedKeepSinkMixin = Sink$keepMixin();
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedKeepSinkMixin), function KeepObserver(instance, delegate, predicate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedKeepSinkMixin, instance, delegate, predicate);
            return instance;
        }));
    })();
    return pipe(createKeepObserver, StatefulContainer$keep(Observable$liftEnumerableOperatorT));
})();

export { Observable$keep as default };
