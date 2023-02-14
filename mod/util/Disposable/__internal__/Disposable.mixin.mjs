/// <reference types="./Disposable.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { isFunction, pipe, none, isSome } from '../../../functions.mjs';
import { DisposableLike_error, DisposableLike_isDisposed, DisposableLike_dispose, DisposableLike_add } from '../../../util.mjs';
import Disposable_dispose from './Disposable.dispose.mjs';
import Disposable_getError from './Disposable.getError.mjs';
import Disposable_isDisposed from './Disposable.isDisposed.mjs';

const doDispose = (instance, disposable) => {
    const error = Disposable_getError(instance);
    if (isFunction(disposable)) {
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
        pipe(disposable, Disposable_dispose(error));
    }
};
const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");
const Disposable_mixin = /*@__PURE__*/ mix(function DisposableMixin(instance) {
    instance[DisposableMixin_disposables] = new Set();
    return instance;
}, props({
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: false,
    [DisposableMixin_disposables]: none,
}), {
    [DisposableLike_dispose](error) {
        if (!Disposable_isDisposed(this)) {
            this[DisposableLike_error] = error;
            this[DisposableLike_isDisposed] = true;
            const disposables = this[DisposableMixin_disposables];
            for (const disposable of disposables) {
                disposables.delete(disposable);
                doDispose(this, disposable);
            }
        }
    },
    [DisposableLike_add](disposable, ignoreChildErrors) {
        const disposables = this[DisposableMixin_disposables];
        if (this === disposable) {
            return;
        }
        else if (Disposable_isDisposed(this)) {
            doDispose(this, disposable);
        }
        else if (!disposables.has(disposable)) {
            disposables.add(disposable);
            if (!isFunction(disposable)) {
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

export { Disposable_mixin as default };
