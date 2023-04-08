/// <reference types="./Dispatcher.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { DispatcherLike_complete } from "../../../rx.js";
import Queueable_delegatingMixin, { QueueableDelegatingMixin_delegate, } from "../../../util/Queue/__internal__/Queueable.delegatingMixin.js";
const Dispatcher_delegatingMixin = /*@__PURE__*/ (() => returns(mix(include(Queueable_delegatingMixin()), function DispatcherMixin(instance, delegate) {
    init(Queueable_delegatingMixin(), instance, delegate);
    return instance;
}, props({}), {
    [DispatcherLike_complete]() {
        this[QueueableDelegatingMixin_delegate][DispatcherLike_complete]();
    },
})))();
export default Dispatcher_delegatingMixin;
