/// <reference types="./DelegatingDispatcherMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DispatcherLike_complete, } from "../../concurrent.js";
import { EventSourceLike_addEventListener, } from "../../events.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../../utils/__mixins__/DelegatingQueueableMixin.js";
const DelegatingDispatcherMixin = /*@__PURE__*/ (() => {
    const DelegatingDispatcherMixin_delegate = Symbol("DelegatingDispatcherMixin_delegate");
    return returns(mix(include(DelegatingDisposableMixin(), DelegatingQueueableMixin()), function DelegatingDispatcherMixin(instance, delegate) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(DelegatingQueueableMixin(), instance, delegate);
        instance[DelegatingDispatcherMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingDispatcherMixin_delegate]: none,
    }), {
        [DispatcherLike_complete]() {
            this[DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
        [EventSourceLike_addEventListener](listener) {
            this[DelegatingDispatcherMixin_delegate][EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default DelegatingDispatcherMixin;
