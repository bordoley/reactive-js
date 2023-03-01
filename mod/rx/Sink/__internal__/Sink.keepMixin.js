/// <reference types="./Sink.keepMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Sink_keepMixin = /*@__PURE__*/ (() => {
    const KeepSinkMixin_predicate = Symbol("KeepSinkMixin_predicate");
    return returns(mix(include(Disposable_delegatingMixin()), function KeepSinkMixin(instance, delegate, predicate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[KeepSinkMixin_predicate] = predicate;
        return instance;
    }, props({
        [KeepSinkMixin_predicate]: none,
    }), {
        [ObserverLike_notify](next) {
            if (this[KeepSinkMixin_predicate](next)) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
        },
    }));
})();
export default Sink_keepMixin;
