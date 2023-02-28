/// <reference types="./Disposable.mixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { call, isFunction, isSome, newInstance, none, pipe, } from "../../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../../util.js";
import dispose from "./Disposable.dispose.js";
import getError from "./Disposable.getError.js";
import isDisposed from "./Disposable.isDisposed.js";
const doDispose = (instance, disposable) => {
    const error = getError(instance);
    if (isFunction(disposable)) {
        try {
            call(disposable, instance, error);
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
const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");
const Disposable_mixin = /*@__PURE__*/ mix(function DisposableMixin(instance) {
    instance[DisposableMixin_disposables] =
        newInstance(Set);
    return instance;
}, props({
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: false,
    [DisposableMixin_disposables]: none,
}), {
    [DisposableLike_dispose](error) {
        if (!isDisposed(this)) {
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
        else if (isDisposed(this)) {
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
export default Disposable_mixin;
