/// <reference types="./Stream.delegatingMixin.d.ts" />

import Dispatcher_delegatingMixin from "../../Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import ReplayObservable_delegatingMixin from "../../ReplayObservable/__internal__/ReplayObservable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { StreamLike_scheduler, } from "../../types.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Dispatcher_delegatingMixin(), ReplayObservable_delegatingMixin(), Disposable_delegatingMixin), function DelegatingStreamMixin(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(ReplayObservable_delegatingMixin(), instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, delegate);
        instance[StreamLike_scheduler] = delegate[StreamLike_scheduler];
        return instance;
    }, props({
        [StreamLike_scheduler]: none,
    }), {}));
})();
export default Stream_delegatingMixin;
