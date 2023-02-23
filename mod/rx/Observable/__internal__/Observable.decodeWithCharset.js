/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import StatefulContainer_decodeWithCharset from "../../../containers/StatefulContainer/__internal__/StatefulContainer.decodeWithCharset.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_decodeWithCharsetMixin from "../../Sink/__internal__/Sink.decodeWithCharsetMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(ReadonlyArray_toRunnableObservable());
    const typedObserverMixin = Observer_mixin();
    const createDecodeWithCharsetObserver = createInstanceFactory(mix(include(typedObserverMixin, typedDecodeWithCharsetMixin), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, instance, delegate, charset);
        return instance;
    }));
    return pipe(createDecodeWithCharsetObserver, StatefulContainer_decodeWithCharset(Observable_liftEnumerableOperator));
})();
export default Observable_decodeWithCharset;
