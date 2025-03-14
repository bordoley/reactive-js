/// <reference types="./DisposableMixin.d.ts" />

import { Set, Set_add, Set_delete, Set_has, } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import Iterable_first from "../../computations/Iterable/__private__/Iterable.first.js";
import { isFunction, isSome, newInstance, none, } from "../../functions.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");
const DisposableMixin_onChildDisposed = Symbol("DisposableMixin_onChildDisposed");
const doDispose = (instance, disposable, error) => {
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
        disposable[DisposableLike_dispose](error);
    }
};
const isDisposableContainer = (disposable) => {
    return (!isFunction(disposable) &&
        isSome(disposable[DisposableContainerLike_add]));
};
const DisposableMixin = /*@__PURE__*/ mix(function DisposableMixin() {
    return this;
}, props({
    [DisposableMixin_onChildDisposed]: none,
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
            this[DisposableMixin_onChildDisposed] = none;
            if (disposables instanceof Set) {
                for (const disposable of disposables) {
                    disposables[Set_delete](disposable);
                    doDispose(this, disposable, error);
                }
            }
            else if (isSome(disposables)) {
                doDispose(this, disposables, error);
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
            doDispose(this, disposable, this[DisposableLike_error]);
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
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const instance = this;
            this[DisposableMixin_onChildDisposed] =
                this[DisposableMixin_onChildDisposed] ??
                    function disposableMixinOnChildDisposed() {
                        const disposables = instance[DisposableMixin_disposables];
                        const disposablesIsSet = disposables instanceof Set;
                        if (disposables === this) {
                            instance[DisposableMixin_disposables] = none;
                        }
                        else if (disposablesIsSet) {
                            disposables[Set_delete](this);
                        }
                        if (disposablesIsSet && disposables.size === 1) {
                            instance[DisposableMixin_disposables] = Iterable_first()(disposables.values());
                        }
                    };
            disposable[DisposableContainerLike_add](this[DisposableMixin_onChildDisposed]);
        }
    },
});
export default DisposableMixin;
