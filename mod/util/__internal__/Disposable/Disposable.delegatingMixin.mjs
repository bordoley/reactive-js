/// <reference types="./Disposable.delegatingMixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { DisposableLike_isDisposed, DisposableLike_error, DisposableLike_add, DisposableLike_dispose } from '../../../util.mjs';
import Disposable_dispose from './Disposable.dispose.mjs';
import Disposable_onDisposed from './Disposable.onDisposed.mjs';

const Disposable_delegatingMixin = 
/*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol("DelegatingDisposable_private_delegate");
    return mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingDisposable_private_delegate] = delegate;
        pipe(delegate, Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [DelegatingDisposable_private_delegate]: none,
        [DisposableLike_isDisposed]: false,
    }), {
        get [DisposableLike_error]() {
            unsafeCast(this);
            const delegate = this[DelegatingDisposable_private_delegate];
            return delegate[DisposableLike_error];
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            const delegate = this[DelegatingDisposable_private_delegate];
            delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](error) {
            pipe(this[DelegatingDisposable_private_delegate], Disposable_dispose(error));
        },
    });
})();

export { Disposable_delegatingMixin as default };
