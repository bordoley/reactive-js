/// <reference types="./DelegatingDisposableContainerMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { bind, isFunction, none, returns, } from "../../functions.js";
import { DisposableContainerLike_add, } from "../../utils.js";
export const DelegatingDisposableContainerLike_delegate = Symbol("DelegatingDisposableContainerLike_delegate");
const DelegatingDisposableContainerMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingDisposableMixin(delegate) {
        this[DelegatingDisposableContainerLike_delegate] =
            delegate[DelegatingDisposableContainerLike_delegate] ?? delegate;
        return this;
    }, props({
        [DelegatingDisposableContainerLike_delegate]: none,
    }), proto({
        [DisposableContainerLike_add](disposable) {
            this[DelegatingDisposableContainerLike_delegate][DisposableContainerLike_add](
            // Cast to make the typechecker happy even though its a lie.
            (isFunction(disposable)
                ? bind(disposable, this)
                : disposable));
        },
    })));
})();
export default DelegatingDisposableContainerMixin;
