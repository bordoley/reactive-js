/// <reference types="./__internal__Disposables.d.ts" />
import { pipe, none, unsafeCast, isSome, ignore, returns } from '../../functions.mjs';
import { DisposableLike_isDisposed, DisposableLike_exception, DisposableLike_add, DisposableLike_dispose } from '../../util.mjs';
import { onDisposed, dispose, getException, isDisposed, add } from './__internal__DisposableLike.mjs';
import { MutableRefLike_current } from './__internal__MutableRefLike.mjs';
import { clazz, props, createInstanceFactory, __extends, init } from './__internal__Objects.mjs';

const delegatingDisposableMixin = 
/*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol("DelegatingDisposable_private_delegate");
    return clazz(function DelegatingDisposableMixin(instance, delegate) {
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
const disposableMixin = /*@__PURE__*/ (() => {
    const Disposable_private_disposables = Symbol("Disposable_private_disposables");
    return clazz(function DisposableMixin(instance) {
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
    return pipe(clazz(function DisposableRef(instance, defaultValue) {
        unsafeCast(instance);
        instance[DisposableRef_private_current] = defaultValue;
        pipe(instance, add(defaultValue));
        return instance;
    }, props({
        [DisposableRef_private_current]: none,
    }), {
        get [MutableRefLike_current]() {
            unsafeCast(this);
            return this[DisposableRef_private_current];
        },
        set [MutableRefLike_current](v) {
            unsafeCast(this);
            const oldValue = this[DisposableRef_private_current];
            pipe(oldValue, dispose());
            this[DisposableRef_private_current] = v;
            pipe(this, add(v));
        },
    }), returns);
})();
const createDisposableRef = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = disposableRefMixin();
    return createInstanceFactory(clazz(__extends(disposableMixin, typedDisposableRefMixin), function DisposableRef(instance, initialValue) {
        init(disposableMixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
    }));
})();

export { createDisposable, createDisposableRef, delegatingDisposableMixin, disposableMixin, disposableRefMixin, disposed };
