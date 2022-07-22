/// <reference types="./Disposable.d.ts" />
import { DisposableLike_error, DisposableLike_isDisposed, getError, dispose, DisposableLike_dispose, isDisposed, DisposableLike_add } from '../../util/DisposableLike.mjs';
import { none, isNone, isSome } from '../../util/Option.mjs';
import { pipe } from '../../util/functions.mjs';

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
const init = (self) => {
    self[Disposable_private_disposables] = new Set();
};

export { init, properties, prototype };
