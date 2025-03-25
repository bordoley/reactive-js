/// <reference types="./DelegatingDisposableMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import DelegatingDisposableContainerMixin from "./DelegatingDisposableContainerMixin.js";
const DelegatingDisposableMixin = /*@__PURE__*/ (() => {
    const DelegatingDisposableMixin_delegate = Symbol("DelegatingDisposableMixin_delegate");
    return mix(include(DelegatingDisposableContainerMixin()), function DelegatingDisposableMixin(delegate) {
        init(DelegatingDisposableContainerMixin(), this, delegate);
        this[DelegatingDisposableMixin_delegate] =
            delegate[DelegatingDisposableMixin_delegate] ?? delegate;
        return this;
    }, props({
        [DelegatingDisposableMixin_delegate]: none,
    }), proto({
        get [DisposableLike_isDisposed]() {
            unsafeCast(this);
            return this[DelegatingDisposableMixin_delegate][DisposableLike_isDisposed];
        },
        get [DisposableLike_error]() {
            unsafeCast(this);
            return this[DelegatingDisposableMixin_delegate][DisposableLike_error];
        },
        [DisposableLike_dispose](error) {
            this[DelegatingDisposableMixin_delegate][DisposableLike_dispose](error);
        },
    }));
})();
export default DelegatingDisposableMixin;
