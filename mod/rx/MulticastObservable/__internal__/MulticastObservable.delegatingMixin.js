/// <reference types="./MulticastObservable.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingHotObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { returns } from "../../../functions.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import HotObservable_delegatingMixin from "../../HotObservable/__internal__/HotObservable.delegatingMixin.js";
const MulticastObservable_delegatingMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(HotObservable_delegatingMixin(), Disposable_delegatingMixin()), function DelegatingMulticastObservableMixin(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(HotObservable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {}));
})();
export default MulticastObservable_delegatingMixin;
