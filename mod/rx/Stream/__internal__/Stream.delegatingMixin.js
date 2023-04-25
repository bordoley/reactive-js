/// <reference types="./Stream.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { StreamLike_scheduler } from "../../../rx.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Dispatcher_delegatingMixin from "../../../util/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Dispatcher_delegatingMixin(), MulticastObservable_delegatingMixin(), Disposable_delegatingMixin), function DelegatingStreamMixin(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(MulticastObservable_delegatingMixin(), instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, delegate);
        instance[StreamLike_scheduler] = delegate[StreamLike_scheduler];
        return instance;
    }, props({
        [StreamLike_scheduler]: none,
    }), {}));
})();
export default Stream_delegatingMixin;
