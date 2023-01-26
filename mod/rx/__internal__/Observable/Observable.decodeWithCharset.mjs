/// <reference types="./Observable.decodeWithCharset.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import StatefulContainer$decodeWithCharset from '../../../containers/__internal__/StatefulContainer/StatefulContainer.decodeWithCharset.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$decodeWithCharsetMixin from '../Sink/Sink.decodeWithCharsetMixin.mjs';
import Observable$liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable$decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink$decodeWithCharsetMixin(ReadonlyArray$toRunnableObservable());
    const typedObserverMixin = Observer$mixin();
    const createDecodeWithCharsetObserver = createInstanceFactory(mix(include(typedObserverMixin, typedDecodeWithCharsetMixin), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, instance, delegate, charset);
        return instance;
    }));
    return pipe(createDecodeWithCharsetObserver, StatefulContainer$decodeWithCharset(Observable$liftEnumerableOperatorT));
})();

export { Observable$decodeWithCharset as default };
