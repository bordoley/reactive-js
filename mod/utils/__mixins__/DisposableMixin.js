/// <reference types="./DisposableMixin.d.ts" />

import { Set, Set_add, Set_delete, Set_has, } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import { isFunction, newInstance, none, } from "../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");
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
const DisposableMixin = /*@__PURE__*/ mix(function DisposableMixin(instance) {
    instance[DisposableMixin_disposables] =
        newInstance(Set);
    return instance;
}, props({
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: false,
    [DisposableMixin_disposables]: none,
}), {
    [DisposableLike_dispose](error) {
        if (!this[DisposableLike_isDisposed]) {
            this[DisposableLike_error] = error;
            this[DisposableLike_isDisposed] = true;
            const disposables = this[DisposableMixin_disposables];
            for (const disposable of disposables) {
                disposables[Set_delete](disposable);
                doDispose(this, disposable);
            }
        }
    },
    [DisposableLike_add](disposable) {
        const disposables = this[DisposableMixin_disposables];
        if (this === disposable) {
            return;
        }
        else if (this[DisposableLike_isDisposed]) {
            doDispose(this, disposable);
        }
        else if (!disposables[Set_has](disposable)) {
            disposables[Set_add](disposable);
            if (!isFunction(disposable)) {
                disposable[DisposableLike_add](_ => {
                    disposables[Set_delete](disposable);
                });
            }
        }
    },
});
export default DisposableMixin;
