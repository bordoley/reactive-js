/// <reference types="./AbstractDelegatingDisposable.d.ts" />

import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../../utils.js";
import AbstractDelegatingDisposableContainer, { AbstractDelegatingDisposableContainer_delegate, } from "../../DisposableContainer/__internal__/AbstractDelegatingDisposableContainer.js";
class AbstractDelegatingDisposable extends AbstractDelegatingDisposableContainer {
    get [DisposableLike_error]() {
        return this[AbstractDelegatingDisposableContainer_delegate][DisposableLike_error];
    }
    get [DisposableLike_isDisposed]() {
        return this[AbstractDelegatingDisposableContainer_delegate][DisposableLike_isDisposed];
    }
    [DisposableLike_dispose](error) {
        this[AbstractDelegatingDisposableContainer_delegate][DisposableLike_dispose](error);
    }
}
export default AbstractDelegatingDisposable;
