/// <reference types="./disposables.d.ts" />
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, getError as getError$1, dispose as dispose$1, isDisposed as isDisposed$1 } from '../../util/DisposableLike.mjs';
import { pipe } from '../../util/functions.mjs';
import { addGetter, addMethod, addProperty } from './mixins.mjs';
import { isSome, isNone } from '../../util/Option.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';

const DelegatingDisposableMixin_delegate = Symbol("DelegatingDisposableMixin_delegate");
function add(disposable, ignoreChildErrors) {
    const delegate = this[DelegatingDisposableMixin_delegate];
    delegate[DisposableLike_add](disposable, ignoreChildErrors);
}
function dispose(error) {
    const delegate = this[DelegatingDisposableMixin_delegate];
    delegate[DisposableLike_dispose](error);
}
function getError() {
    const delegate = this[DelegatingDisposableMixin_delegate];
    return delegate[DisposableLike_error];
}
function isDisposed() {
    const delegate = this[DelegatingDisposableMixin_delegate];
    return delegate[DisposableLike_isDisposed];
}
const mixinDelegatingDisposable = () => (Constructor) => pipe(Constructor, addGetter(DisposableLike_error, getError), addGetter(DisposableLike_isDisposed, isDisposed), addMethod(DisposableLike_dispose, dispose), addMethod(DisposableLike_add, add));

const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");
const doDispose = (self, disposable) => {
    const error = getError$1(self);
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
        pipe(disposable, dispose$1(error));
    }
};
const disposableAdd = function (disposable, ignoreChildErrors) {
    const disposables = this[DisposableMixin_disposables];
    if (this === disposable) {
        return;
    }
    else if (isDisposed$1(this)) {
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
};
function disposableDispose(error) {
    if (!isDisposed$1(this)) {
        this[DisposableLike_error] = error;
        this[DisposableLike_isDisposed] = true;
        const disposables = this[DisposableMixin_disposables];
        if (isNone(disposables)) {
            return;
        }
        for (const disposable of disposables) {
            disposables.delete(disposable);
            doDispose(this, disposable);
        }
    }
}
const mixinDisposable = () => (Constructor) => pipe(Constructor, addMethod(DisposableLike_dispose, disposableDispose), addMethod(DisposableLike_add, disposableAdd));

const SerialDisposableMixin_current = Symbol("SerialDisposableMixin_current");
function set(newCurrent) {
    const oldCurrent = this[SerialDisposableMixin_current];
    this[SerialDisposableMixin_current] = newCurrent;
    this[DisposableLike_add](newCurrent, false);
    if (isSome(oldCurrent) && oldCurrent !== newCurrent) {
        pipe(oldCurrent, dispose$1());
    }
}
const mixinSerialDisposable = (defaultValue) => {
    function get() {
        let current = this[SerialDisposableMixin_current];
        if (isNone(current)) {
            current = defaultValue();
            this[SerialDisposableMixin_current] = current;
            this[DisposableLike_add](current, false);
        }
        return current;
    }
    return (Constructor) => pipe(Constructor, addProperty(MutableRefLike_current, {
        get,
        set,
    }));
};

export { DelegatingDisposableMixin_delegate, DisposableMixin_disposables, SerialDisposableMixin_current, mixinDelegatingDisposable, mixinDisposable, mixinSerialDisposable };
