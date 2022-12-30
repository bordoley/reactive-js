/// <reference types="./DisposableLike.delegatingMixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { DisposableLike_isDisposed, DisposableLike_exception, DisposableLike_add, DisposableLike_dispose } from '../../../util.mjs';
import dispose from './DisposableLike.dispose.mjs';
import onDisposed from './DisposableLike.onDisposed.mjs';

const delegatingMixin = 
/*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol("DelegatingDisposable_private_delegate");
    return mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingDisposable_private_delegate] = delegate;
        pipe(delegate, onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [DelegatingDisposable_private_delegate]: none,
        [DisposableLike_isDisposed]: false,
    }), {
        get [DisposableLike_exception]() {
            unsafeCast(this);
            const delegate = this[DelegatingDisposable_private_delegate];
            return delegate[DisposableLike_exception];
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            const delegate = this[DelegatingDisposable_private_delegate];
            delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](error) {
            pipe(this[DelegatingDisposable_private_delegate], dispose(error));
        },
    });
})();

export { delegatingMixin as default };
