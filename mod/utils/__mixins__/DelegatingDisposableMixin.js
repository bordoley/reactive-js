/// <reference types="./DelegatingDisposableMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { bind, isFunction, none, pipe, returns, } from "../../functions.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
const DelegatingDisposableMixin = 
/*@__PURE__*/ (() => {
    const DelegatingDisposable_delegate = Symbol("DelegatingDisposable_delegate");
    function onDelegatingDisposableMixinDisposed() {
        this[DisposableLike_isDisposed] = true;
    }
    return returns(mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingDisposable_delegate] = delegate;
        instance[DelegatingDisposable_delegate] =
            delegate[DelegatingDisposable_delegate] ?? delegate;
        pipe(instance, DisposableContainer.onDisposed(onDelegatingDisposableMixinDisposed));
        return instance;
    }, props({
        [DelegatingDisposable_delegate]: none,
        [DisposableLike_isDisposed]: false,
    }), {
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
    }));
})();
export default DelegatingDisposableMixin;
