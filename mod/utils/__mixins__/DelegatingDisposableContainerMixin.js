/// <reference types="./DelegatingDisposableContainerMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { bind, isFunction, none, } from "../../functions.js";
import { DisposableContainerLike_add, } from "../../utils.js";
const DelegatingDisposableContainerMixin = /*@__PURE__*/ (() => {
    const DelegatingDisposableContainer_delegate = Symbol("DelegatingDisposableContainer_delegate");
    return mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingDisposableContainer_delegate] =
            delegate[DelegatingDisposableContainer_delegate] ?? delegate;
        return instance;
    }, props({
        [DelegatingDisposableContainer_delegate]: none,
    }), {
        [DisposableContainerLike_add](disposable) {
            this[DelegatingDisposableContainer_delegate][DisposableContainerLike_add](
            // Cast to make the typechecker happy even though its a lie.
            (isFunction(disposable)
                ? bind(disposable, this)
                : disposable));
        },
    });
})();
export default DelegatingDisposableContainerMixin;
