/// <reference types="./DisposableMixin.d.ts" />

import { Set, Set_add, Set_delete, Set_has, } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import { isFunction, isSome, newInstance, none, } from "../../functions.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");
const doDispose = (disposable, error) => {
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
const isDisposableContainer = (disposable) => {
    return (!isFunction(disposable) &&
        isSome(disposable[DisposableContainerLike_add]));
};
const DisposableMixin = /*@__PURE__*/ mix(function DisposableMixin(instance) {
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
            this[DisposableMixin_disposables] = none;
            if (disposables instanceof Set) {
                for (const disposable of disposables) {
                    disposables[Set_delete](disposable);
                    doDispose(disposable, error);
                }
            }
            else if (isSome(disposables)) {
                doDispose(disposables, error);
            }
        }
    },
    [DisposableContainerLike_add](disposable) {
        const disposables = this[DisposableMixin_disposables];
        const containsDisposable = (disposables instanceof Set && disposables[Set_has](disposable)) ||
            disposables === disposable;
        if (this === disposable || containsDisposable) {
            return;
        }
        else if (this[DisposableLike_isDisposed]) {
            doDispose(disposable, this[DisposableLike_error]);
            return;
        }
        if (disposables instanceof Set) {
            disposables[Set_add](disposable);
        }
        else if (isSome(disposables)) {
            const newDisposables = (this[DisposableMixin_disposables] =
                newInstance(Set));
            newDisposables[Set_add](disposables);
            newDisposables[Set_add](disposable);
        }
        else {
            this[DisposableMixin_disposables] = disposable;
        }
        if (isDisposableContainer(disposable)) {
            disposable[DisposableContainerLike_add](_ => {
                const disposables = this[DisposableMixin_disposables];
                const disposablesIsSet = disposables instanceof Set;
                if (disposables === disposable) {
                    this[DisposableMixin_disposables] = none;
                }
                else if (disposablesIsSet) {
                    disposables[Set_delete](disposable);
                }
                if (disposablesIsSet && disposables.size === 1) {
                    this[DisposableMixin_disposables] = disposables
                        .values()
                        .next().value;
                }
            });
        }
    },
});
export default DisposableMixin;
