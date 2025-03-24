/// <reference types="./DelegatingDisposableMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import DelegatingDisposableContainerMixin, { DelegatingDisposableContainerLike_delegate, } from "./DelegatingDisposableContainerMixin.js";
const DelegatingDisposableMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableContainerMixin()), function DelegatingDisposableMixin(delegate) {
        init(DelegatingDisposableContainerMixin(), this, delegate);
        return this;
    }, props(), proto({
        get [DisposableLike_isDisposed]() {
            unsafeCast(this);
            return this[DelegatingDisposableContainerLike_delegate][DisposableLike_isDisposed];
        },
        get [DisposableLike_error]() {
            unsafeCast(this);
            return this[DelegatingDisposableContainerLike_delegate][DisposableLike_error];
        },
        [DisposableLike_dispose](error) {
            this[DelegatingDisposableContainerLike_delegate][DisposableLike_dispose](error);
        },
    })));
})();
export default DelegatingDisposableMixin;
