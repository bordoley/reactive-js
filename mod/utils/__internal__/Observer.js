/// <reference types="./Observer.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const collect = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(CollectorSinkMixin(), DelegatingSchedulerMixin), function CollectObserver(scheduler, buffer) {
        init(CollectorSinkMixin(), this, buffer);
        init(DelegatingSchedulerMixin, this, scheduler);
        return this;
    }, props(), proto({
        [FlowControllerLike_isReady]: true,
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
    }));
})();
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), DelegatingSchedulerMixin), function NonDisposingDelegatingObserver(delegate) {
    init(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), this, delegate);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}))();
export const takeLast = /*@__PURE__*/ (() => mixInstanceFactory(include(TakeLastConsumerMixin(), DelegatingSchedulerMixin), function TakeLastObserver(scheduler, capacity) {
    init(TakeLastConsumerMixin(), this, capacity);
    init(DelegatingSchedulerMixin, this, scheduler);
    return this;
}))();
