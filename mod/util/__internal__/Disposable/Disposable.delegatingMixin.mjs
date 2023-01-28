/// <reference types="./Disposable.delegatingMixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { DisposableLike_isDisposed, DisposableLike_error, DisposableLike_add, DisposableLike_dispose } from '../../../util.mjs';
import Disposable_dispose from './Disposable.dispose.mjs';
import Disposable_onDisposed from './Disposable.onDisposed.mjs';

const Disposable_delegatingMixin = 
/*@__PURE__*/ (() => {
    const DelegatingDisposableMixin_delegate = Symbol("DelegatingDisposableMixin_delegate");
    return mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingDisposableMixin_delegate] = delegate;
        pipe(delegate, Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [DelegatingDisposableMixin_delegate]: none,
        [DisposableLike_isDisposed]: false,
    }), {
        get [DisposableLike_error]() {
            unsafeCast(this);
            const delegate = this[DelegatingDisposableMixin_delegate];
            return delegate[DisposableLike_error];
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            const delegate = this[DelegatingDisposableMixin_delegate];
            delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](error) {
            pipe(this[DelegatingDisposableMixin_delegate], Disposable_dispose(error));
        },
    });
})();

export { Disposable_delegatingMixin as default };
