/// <reference types="./Sink.keepMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
const KeepSinkMixin_predicate = Symbol("KeepSinkMixin_predicate");
const Sink_keepMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin()), function KeepSinkMixin(instance, delegate, predicate) {
    init(Disposable_delegatingMixin(), instance, delegate);
    instance[KeepSinkMixin_predicate] = predicate;
    return instance;
}, props({
    [KeepSinkMixin_predicate]: none,
}), {
    [SinkLike_notify](next) {
        if (this[KeepSinkMixin_predicate](next)) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        }
    },
})))();
export default Sink_keepMixin;
