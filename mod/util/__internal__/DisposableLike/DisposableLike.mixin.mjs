/// <reference types="./DisposableLike.mixin.d.ts" />
import { mixin, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, isSome } from '../../../functions.mjs';
import { DisposableLike_exception, DisposableLike_isDisposed, DisposableLike_dispose, DisposableLike_add } from '../../../util.mjs';
import dispose from './DisposableLike.dispose.mjs';
import getException from './DisposableLike.getException.mjs';
import isDisposed from './DisposableLike.isDisposed.mjs';

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

export { disposableMixin as default };
