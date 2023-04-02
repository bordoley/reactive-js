/// <reference types="./Stream.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Dispatcher_delegatingMixin(), MulticastObservable_delegatingMixin()), function DelegatingStreamMixin(instance, delegate) {
        init(MulticastObservable_delegatingMixin(), instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {}));
})();
export default Stream_delegatingMixin;
