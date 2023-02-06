/// <reference types="./Disposable.delegatingMixin.d.ts" />
import { mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { pipe, unsafeCast, returns } from '../../../functions.mjs';
import { DisposableLike_isDisposed, DisposableLike_error, DisposableLike_add, DisposableLike_dispose } from '../../../util.mjs';
import Disposable_dispose from './Disposable.dispose.mjs';
import Disposable_onDisposed from './Disposable.onDisposed.mjs';

const Disposable_delegatingMixin = 
/*@__PURE__*/ (() => {
    return pipe(mix(include(delegatingMixin()), function DelegatingDisposableMixin(instance, delegate) {
        init(delegatingMixin(), instance, delegate);
        pipe(delegate, Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [DisposableLike_isDisposed]: false,
    }), {
        get [DisposableLike_error]() {
            unsafeCast(this);
            const delegate = this[DelegatingLike_delegate];
            return delegate[DisposableLike_error];
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            const delegate = this[DelegatingLike_delegate];
            delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](error) {
            pipe(this[DelegatingLike_delegate], Disposable_dispose(error));
        },
    }), returns);
})();

export { Disposable_delegatingMixin as default };
