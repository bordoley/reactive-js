/// <reference types="./Dispatcher.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __DelegatingDispatcherMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns } from "../../../functions.js";
import { DispatcherLike_complete, EventSourceLike_addEventListener, } from "../../../util.js";
import Queueable_delegatingMixin from "../../Queue/__internal__/Queueable.delegatingMixin.js";
const Dispatcher_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Queueable_delegatingMixin()), function DelegatingDispatcherMixin(instance, delegate) {
        init(Queueable_delegatingMixin(), instance, delegate);
        instance[__DelegatingDispatcherMixin_delegate] = delegate;
        return instance;
    }, props({
        [__DelegatingDispatcherMixin_delegate]: none,
    }), {
        [DispatcherLike_complete]() {
            this[__DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
        [EventSourceLike_addEventListener](listener) {
            this[__DelegatingDispatcherMixin_delegate][EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default Dispatcher_delegatingMixin;
