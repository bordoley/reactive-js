/// <reference types="./DelegatingNonCompletingNonDisposingMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingSinkMixin from "./DelegatingSinkMixin.js";
import DisposableMixin from "./DisposableMixin.js";
const DelegatingNonCompletingNonDisposingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableMixin, DelegatingSinkMixin()), function DelegatingNonCompletingNonDisposingMixin(delegate) {
        init(DisposableMixin, this);
        init(DelegatingSinkMixin(), this, delegate);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[DisposableLike_isDisposed] ||
                this[DelegatingEventListenerLike_delegate][SinkLike_isCompleted]);
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    })));
})();
export default DelegatingNonCompletingNonDisposingMixin;
