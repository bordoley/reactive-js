/// <reference types="./Disposable.mixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { __DisposableMixin_disposables } from "../../../__internal__/symbols.js";
import { isFunction, newInstance, none } from "../../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../../util.js";
const doDispose = (instance, disposable) => {
    const error = instance[DisposableLike_error];
    if (isFunction(disposable)) {
        try {
            disposable(error);
        }
        catch (_) {
            /* Proactively catch Errors thrown in teardown logic. Teardown functions
             * shouldn't throw, so this is to prevent unexpected Errors.
             */
        }
    }
    else {
        disposable[DisposableLike_dispose](error);
    }
};
const Disposable_mixin = /*@__PURE__*/ mix(function DisposableMixin(instance) {
    instance[__DisposableMixin_disposables] =
        newInstance(Set);
    return instance;
}, props({
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: false,
    [__DisposableMixin_disposables]: none,
}), {
    [DisposableLike_dispose](error) {
        if (!this[DisposableLike_isDisposed]) {
            this[DisposableLike_error] = error;
            this[DisposableLike_isDisposed] = true;
            const disposables = this[__DisposableMixin_disposables];
            for (const disposable of disposables) {
                disposables.delete(disposable);
                doDispose(this, disposable);
            }
        }
    },
    [DisposableLike_add](disposable) {
        const disposables = this[__DisposableMixin_disposables];
        if (this === disposable) {
            return;
        }
        else if (this[DisposableLike_isDisposed]) {
            doDispose(this, disposable);
        }
        else if (!disposables.has(disposable)) {
            disposables.add(disposable);
            if (!isFunction(disposable)) {
                disposable[DisposableLike_add](_ => {
                    disposables.delete(disposable);
                });
            }
        }
    },
});
export default Disposable_mixin;
