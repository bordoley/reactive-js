/// <reference types="./DisposableLikeMixins.d.ts" />
import { pipe, none, isSome, ignore, returns } from '../../functions.mjs';
import { onDisposed, DisposableLike_isDisposed, DisposableLike_exception, DisposableLike_add, DisposableLike_dispose, dispose, getException, isDisposed, add } from './DisposableLikeInternal.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';
import { clazz, createInstanceFactory, __extends, init } from './Object.mjs';

const delegatingDisposableMixin = /*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol("DelegatingDisposable_private_delegate");
    return clazz(function DelegatingDisposableMixin(delegate) {
        this[DelegatingDisposable_private_delegate] = delegate;
        pipe(delegate, onDisposed(_ => {
            this[DisposableLike_isDisposed] = true;
        }));
        return this;
    }, {
        [DelegatingDisposable_private_delegate]: none,
        [DisposableLike_isDisposed]: false,
    }, {
        get [DisposableLike_exception]() {
            const self = this;
            const delegate = self[DelegatingDisposable_private_delegate];
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
const doDispose = (self, disposable) => {
    const error = getException(self);
    if (disposable instanceof Function) {
        try {
            disposable.call(self, error);
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
const disposableMixin = /*@__PURE__*/ (() => {
    const Disposable_private_disposables = Symbol("Disposable_private_disposables");
    return clazz(function DisposableMixin() {
        this[Disposable_private_disposables] = new Set();
        return this;
    }, {
        [DisposableLike_exception]: none,
        [DisposableLike_isDisposed]: false,
        [Disposable_private_disposables]: none,
    }, {
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
const createDisposable = 
/*@__PURE__*/ createInstanceFactory(disposableMixin);
const disposed = {
    [DisposableLike_exception]: none,
    [DisposableLike_isDisposed]: true,
    [DisposableLike_add](disposable) {
        doDispose(this, disposable);
    },
    [DisposableLike_dispose]: ignore,
};
const disposableRefMixin = /*@__PURE__*/ (() => {
    const DisposableRef_private_current = Symbol("DisposableRef_private_current");
    return pipe(clazz(function DisposableRef(defaultValue) {
        this[DisposableRef_private_current] = defaultValue;
        pipe(this, add(defaultValue));
        return this;
    }, {
        [DisposableRef_private_current]: none,
    }, {
        get [MutableRefLike_current]() {
            const self = this;
            return self[DisposableRef_private_current];
        },
        set [MutableRefLike_current](v) {
            const self = this;
            const oldValue = self[DisposableRef_private_current];
            pipe(oldValue, dispose());
            self[DisposableRef_private_current] = v;
            pipe(self, add(v));
        },
    }), returns);
})();
const createDisposableRef = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = disposableRefMixin();
    return createInstanceFactory(clazz(__extends(disposableMixin, typedDisposableRefMixin), function DisposableRef(initialValue) {
        init(disposableMixin, this);
        init(typedDisposableRefMixin, this, initialValue);
        return this;
    }));
})();

export { createDisposable, createDisposableRef, delegatingDisposableMixin, disposableMixin, disposableRefMixin, disposed };
