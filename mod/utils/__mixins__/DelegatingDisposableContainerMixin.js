/// <reference types="./DelegatingDisposableContainerMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { bind, isFunction, none, returns, } from "../../functions.js";
import { DisposableContainerLike_add, } from "../../utils.js";
const DelegatingDisposableContainerMixin = /*@__PURE__*/ (() => {
    const DelegatingDisposableContainerMixin_delegate = Symbol("DelegatingDisposableContainerMixin_delegate");
    return returns(mix(function DelegatingDisposableContainerMixin(delegate) {
        this[DelegatingDisposableContainerMixin_delegate] =
            delegate[DelegatingDisposableContainerMixin_delegate] ?? delegate;
        return this;
    }, props({
        [DelegatingDisposableContainerMixin_delegate]: none,
    }), proto({
        [DisposableContainerLike_add](disposable) {
            this[DelegatingDisposableContainerMixin_delegate][DisposableContainerLike_add](
            // Cast to make the typechecker happy even though its a lie.
            (isFunction(disposable)
                ? bind(disposable, this)
                : disposable));
        },
    })));
})();
export default DelegatingDisposableContainerMixin;
