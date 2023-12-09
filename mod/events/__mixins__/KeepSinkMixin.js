/// <reference types="./KeepSinkMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { SinkLike_notify } from "../../events.js";
import { none, returns } from "../../functions.js";
import { DelegatingDisposableLike_delegate, } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const KeepSinkMixin_predicate = Symbol("KeepSinkMixin_predicate");
const KeepSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function KeepSinkMixin(instance, delegate, predicate) {
    init(DelegatingDisposableMixin(), instance, delegate);
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
export default KeepSinkMixin;
