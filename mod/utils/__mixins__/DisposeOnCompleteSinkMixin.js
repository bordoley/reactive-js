/// <reference types="./DisposeOnCompleteSinkMixin.d.ts" />

import { mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
const DisposeOnCompleteSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DisposeOnCompleteSinkMixin() {
        return this;
    }, props({}), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    })));
})();
export default DisposeOnCompleteSinkMixin;
