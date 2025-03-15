/// <reference types="./DelegatingDisposableMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { bind, isFunction, none, } from "../../functions.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
const DelegatingDisposableMixin = 
/*@__PURE__*/ (() => {
    const DelegatingDisposable_delegate = Symbol("DelegatingDisposable_delegate");
    return mix(function DelegatingDisposableMixin(delegate) {
        this[DelegatingDisposable_delegate] = delegate;
        this[DelegatingDisposable_delegate] =
            delegate[DelegatingDisposable_delegate] ??
                delegate;
        return this;
    }, props({
        [DelegatingDisposable_delegate]: none,
    }), {
        get [DisposableLike_isDisposed]() {
            unsafeCast(this);
            return this[DelegatingDisposable_delegate][DisposableLike_isDisposed];
        },
        get [DisposableLike_error]() {
            unsafeCast(this);
            return this[DelegatingDisposable_delegate][DisposableLike_error];
        },
        [DisposableContainerLike_add](disposable) {
            this[DelegatingDisposable_delegate][DisposableContainerLike_add](
            // Cast to make the typechecker happy even though its a lie.
            (isFunction(disposable)
                ? bind(disposable, this)
                : disposable));
        },
        [DisposableLike_dispose](error) {
            this[DelegatingDisposable_delegate][DisposableLike_dispose](error);
        },
    });
})();
export default DelegatingDisposableMixin;
