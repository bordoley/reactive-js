/// <reference types="./ObservableLike.decodeWithCharset.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import StatefulContainerLike__decodeWithCharset from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset.mjs';
import { pipe } from '../../../functions.mjs';
import { ObserverLike_scheduler } from '../../../rx.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__decodeWithCharsetMixin from '../SinkLike/SinkLike.decodeWithCharsetMixin.mjs';
import ObservableLike__liftEnumerableOperatorT from './ObservableLike.liftEnumerableOperatorT.mjs';

const ObservableLike__decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = SinkLike__decodeWithCharsetMixin(ReadonlyArrayLike__toRunnableObservable());
    const typedObserverMixin = ObserverLike__mixin();
    const createDecodeWithCharsetObserver = createInstanceFactory(mix(include(typedObserverMixin, typedDecodeWithCharsetMixin), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, instance, delegate, charset);
        return instance;
    }));
    return pipe(createDecodeWithCharsetObserver, StatefulContainerLike__decodeWithCharset(ObservableLike__liftEnumerableOperatorT));
})();

export { ObservableLike__decodeWithCharset as default };
