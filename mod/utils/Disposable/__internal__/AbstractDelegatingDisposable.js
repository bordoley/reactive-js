/// <reference types="./AbstractDelegatingDisposable.d.ts" />

import { bind, isFunction } from "../../../functions.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../../utils.js";
const AbstractDelegatingDisposable_delegate = Symbol("AbstractDelegatingDisposable_delegate");
class AbstractDelegatingDisposable {
    [AbstractDelegatingDisposable_delegate];
    constructor(delegate) {
        this[AbstractDelegatingDisposable_delegate] =
            delegate[AbstractDelegatingDisposable_delegate] ?? delegate;
    }
    get [DisposableLike_error]() {
        return this[AbstractDelegatingDisposable_delegate][DisposableLike_error];
    }
    get [DisposableLike_isDisposed]() {
        return this[AbstractDelegatingDisposable_delegate][DisposableLike_isDisposed];
    }
    [DisposableLike_dispose](error) {
        this[AbstractDelegatingDisposable_delegate][DisposableLike_dispose](error);
    }
    [DisposableContainerLike_add](disposable) {
        this[AbstractDelegatingDisposable_delegate][DisposableContainerLike_add](
        // Cast to make the typechecker happy even though its a lie.
        (isFunction(disposable)
            ? bind(disposable, this)
            : disposable));
    }
}
export default AbstractDelegatingDisposable;
