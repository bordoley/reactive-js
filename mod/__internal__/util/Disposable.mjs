/// <reference types="./Disposable.d.ts" />
import { none, pipe, isNone, isSome, ignore } from '../../functions.mjs';
import { DisposableLike_error, DisposableLike_isDisposed, getError, dispose, DisposableLike_dispose, isDisposed, DisposableLike_add } from './DisposableLikeInternal.mjs';
import { Object_properties, Object_init, createObjectFactory } from './Object.mjs';

const Disposable_private_disposables = Symbol("Disposable_private_disposables");
const properties = {
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: false,
    [Disposable_private_disposables]: none,
};
const doDispose = (self, disposable) => {
    const error = getError(self);
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
const prototype = {
    [Object_properties]: properties,
    [Object_init]() {
        this[Disposable_private_disposables] = new Set();
    },
    [DisposableLike_dispose](error) {
        if (!isDisposed(this)) {
            this[DisposableLike_error] = error;
            this[DisposableLike_isDisposed] = true;
            const disposables = this[Disposable_private_disposables];
            if (isNone(disposables)) {
                return;
            }
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
};
const createDisposable = 
/*@__PURE__*/ createObjectFactory(prototype);
const disposed = {
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: true,
    [DisposableLike_add](disposable) {
        doDispose(this, disposable);
    },
    [DisposableLike_dispose]: ignore,
};

export { createDisposable, disposed, prototype };
