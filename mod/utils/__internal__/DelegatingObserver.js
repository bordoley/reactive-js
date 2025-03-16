/// <reference types="./DelegatingObserver.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { DisposableLike_dispose, SinkLike_complete, } from "../../utils.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
export const create = 
/*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingConsumerMixin(), DelegatingSchedulerMixin), function DelegatingObserver(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingConsumerMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);
        return this;
    });
})();
export const createNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, DelegatingConsumerMixin(), DelegatingSchedulerMixin), function NonDisposingDelegatingObserver(delegate) {
    init(DisposableMixin, this);
    init(DelegatingConsumerMixin(), this, delegate);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}, props(), proto({
    [SinkLike_complete]() {
        this[DisposableLike_dispose]();
    },
})))();
