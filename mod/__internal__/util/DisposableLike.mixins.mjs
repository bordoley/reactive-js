/// <reference types="./DisposableLike.mixins.d.ts" />
import { pipe, none, unsafeCast, isSome } from '../../functions.mjs';
import { DisposableLike_isDisposed, DisposableLike_exception, DisposableLike_add, DisposableLike_dispose } from '../../util.mjs';
import dispose from '../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import getException from '../../util/__internal__/DisposableLike/DisposableLike.getException.mjs';
import isDisposed from '../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import onDisposed from '../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import { mixin, props } from '../mixins.mjs';

const delegatingDisposableMixin = 
/*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol("DelegatingDisposable_private_delegate");
    return mixin(function DelegatingDisposableMixin(instance, delegate) {
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
const disposableMixin = /*@__PURE__*/ (() => {
    const doDispose = (instance, disposable) => {
        const error = getException(instance);
        if (disposable instanceof Function) {
            try {
                disposable.call(instance, error);
            }
            catch (_) {
                /* Proactively catch Errors thrown in teardown logic. Teardown functions
                 * shouldn't throw, so this is to prevent unexpected Errors.
                 */
            }
        }
        else {
            pipe(disposable, dispose(error));
        }
    };
    const Disposable_private_disposables = Symbol("Disposable_private_disposables");
    return mixin(function DisposableMixin(instance) {
        instance[Disposable_private_disposables] = new Set();
        return instance;
    }, props({
        [DisposableLike_exception]: none,
        [DisposableLike_isDisposed]: false,
        [Disposable_private_disposables]: none,
    }), {
        [DisposableLike_dispose](error) {
            if (!isDisposed(this)) {
                this[DisposableLike_exception] = error;
                this[DisposableLike_isDisposed] = true;
                const disposables = this[Disposable_private_disposables];
                for (const disposable of disposables) {
                    disposables.delete(disposable);
                    doDispose(this, disposable);
                }
            }
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            const disposables = this[Disposable_private_disposables];
            if (this === disposable) {
                return;
            }
            else if (isDisposed(this)) {
                doDispose(this, disposable);
            }
            else if (!disposables.has(disposable)) {
                disposables.add(disposable);
                if (!(disposable instanceof Function)) {
                    disposable[DisposableLike_add](e => {
                        disposables.delete(disposable);
                        if (isSome(e) && !ignoreChildErrors) {
                            this[DisposableLike_dispose](e);
                        }
                    }, true);
                }
            }
        },
    });
})();

export { delegatingDisposableMixin, disposableMixin };
