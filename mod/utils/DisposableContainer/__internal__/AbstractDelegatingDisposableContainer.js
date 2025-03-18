/// <reference types="./AbstractDelegatingDisposableContainer.d.ts" />

import { bind, isFunction } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
export const AbstractDelegatingDisposableContainer_delegate = Symbol("AbstractDelegatingDisposableContainer_delegate");
class AbstractDelegatingDisposableContainer {
    [AbstractDelegatingDisposableContainer_delegate];
    constructor(delegate) {
        this[AbstractDelegatingDisposableContainer_delegate] =
            delegate[AbstractDelegatingDisposableContainer_delegate] ?? delegate;
    }
    [DisposableContainerLike_add](disposable) {
        this[AbstractDelegatingDisposableContainer_delegate][DisposableContainerLike_add](
        // Cast to make the typechecker happy even though its a lie.
        (isFunction(disposable)
            ? bind(disposable, this)
            : disposable));
    }
}
export default AbstractDelegatingDisposableContainer;
