/// <reference types="./Dispatcher.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingDispatcherMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns } from "../../../functions.js";
import { DispatcherLike_complete } from "../../../rx.js";
import Queueable_delegatingMixin from "../../../util/Queue/__internal__/Queueable.delegatingMixin.js";
const Dispatcher_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Queueable_delegatingMixin()), function DelegatingDispatcherMixin(instance, delegate) {
        init(Queueable_delegatingMixin(), instance, delegate);
        instance[DelegatingDispatcherMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingDispatcherMixin_delegate]: none,
    }), {
        [DispatcherLike_complete]() {
            this[DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
    }));
})();
export default Dispatcher_delegatingMixin;
