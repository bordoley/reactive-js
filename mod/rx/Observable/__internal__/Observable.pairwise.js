/// <reference types="./Observable.pairwise.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import Observable_lift from "./Observable.lift.js";
const Observable_pairwise = 
/*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        const typedPairwiseSinkMixin = Sink_pairwiseMixin();
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(typedObserverMixin, typedPairwiseSinkMixin), function PairwiseObserver(instance, delegate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedPairwiseSinkMixin, instance, delegate);
            return instance;
        }, props({}), Observer_decorateNotifyForDev(typedPairwiseSinkMixin)));
    })();
    return pipe(createPairwiseObserver, Observable_lift(true), returns);
})();
export default Observable_pairwise;
