/// <reference types="./DelegatingDisposable.d.ts" />
import { disposed, DisposableLike_error, DisposableLike_isDisposed, DisposableLike_add, DisposableLike_dispose } from '../../util.mjs';
import { Object_init } from './Object.mjs';

const DelegatingDisposable_private_delegate = Symbol("DelegatingDisposable_private_delegate");
const properties = {
    [DelegatingDisposable_private_delegate]: disposed,
};
const prototype = {
    get [DisposableLike_error]() {
        const self = this;
        const delegate = self[DelegatingDisposable_private_delegate];
        return delegate[DisposableLike_error];
    },
    get [DisposableLike_isDisposed]() {
        const self = this;
        const delegate = self[DelegatingDisposable_private_delegate];
        return delegate[DisposableLike_isDisposed];
    },
    [DisposableLike_add](disposable, ignoreChildErrors) {
        const delegate = this[DelegatingDisposable_private_delegate];
        delegate[DisposableLike_add](disposable, ignoreChildErrors);
    },
    [DisposableLike_dispose](error) {
        const delegate = this[DelegatingDisposable_private_delegate];
        delegate[DisposableLike_dispose](error);
    },
    [Object_init](delegate) {
        this[DelegatingDisposable_private_delegate] = delegate;
    },
};

export { properties, prototype };
