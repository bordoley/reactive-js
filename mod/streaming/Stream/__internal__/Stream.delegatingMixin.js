/// <reference types="./Stream.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingStreamMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import { StreamLike_scheduler } from "../../../streaming.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Dispatcher_delegatingMixin(), MulticastObservable_delegatingMixin(), Disposable_delegatingMixin), function DelegatingStreamMixin(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(MulticastObservable_delegatingMixin(), instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, delegate);
        instance[DelegatingStreamMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingStreamMixin_delegate]: none,
    }), {
        get [StreamLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingStreamMixin_delegate][StreamLike_scheduler];
        },
    }));
})();
export default Stream_delegatingMixin;
