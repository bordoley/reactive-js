/// <reference types="./Sink.skipFirstMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Sink_skipFirstMixin = /*@__PURE__*/ (() => {
    const SkipFirstSinkMixin_skipCount = Symbol("SkipFirstSinkMixin_skipCount");
    const SkipFirstSinkMixin_count = Symbol("SkipFirstSinkMixin_count");
    return returns(mix(include(Disposable_delegatingMixin()), function SkipFirstSinkMixin(instance, delegate, skipCount) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[SkipFirstSinkMixin_skipCount] = skipCount;
        return instance;
    }, props({
        [SkipFirstSinkMixin_skipCount]: 0,
        [SkipFirstSinkMixin_count]: 0,
    }), {
        [ObserverLike_notify](next) {
            this[SkipFirstSinkMixin_count]++;
            if (this[SkipFirstSinkMixin_count] > this[SkipFirstSinkMixin_skipCount]) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
        },
    }));
})();
export default Sink_skipFirstMixin;
