/// <reference types="./Observable.decodeWithCharset.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import StatefulContainer_decodeWithCharset from '../../../containers/__internal__/StatefulContainer/StatefulContainer.decodeWithCharset.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_decodeWithCharsetMixin from '../Sink/Sink.decodeWithCharsetMixin.mjs';
import Observable_liftEnumerableOperatorT from './Observable.liftEnumerableOperatorT.mjs';

const Observable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(ReadonlyArray_toRunnableObservable());
    const typedObserverMixin = Observer_mixin();
    const createDecodeWithCharsetObserver = createInstanceFactory(mix(include(typedObserverMixin, typedDecodeWithCharsetMixin), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, instance, delegate, charset);
        return instance;
    }));
    return pipe(createDecodeWithCharsetObserver, StatefulContainer_decodeWithCharset(Observable_liftEnumerableOperatorT));
})();

export { Observable_decodeWithCharset as default };
