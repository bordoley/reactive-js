/// <reference types="./DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
const DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DisposableMixin, DelegatingSinkMixin()), function NonDisposingDelegatingSink(delegate) {
    init(DisposableMixin, this);
    init(DelegatingSinkMixin(), this, delegate);
    return this;
}, props(), proto({
    get [SinkLike_isCompleted]() {
        unsafeCast(this);
        return this[DisposableLike_isDisposed];
    },
    [SinkLike_complete]() {
        this[DisposableLike_dispose]();
    },
}))))();
export default DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin;
