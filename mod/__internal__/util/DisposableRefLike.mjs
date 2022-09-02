/// <reference types="./DisposableRefLike.d.ts" />
import { pipe, unsafeCast, none, returns } from '../../functions.mjs';
import { mixin, props, createInstanceFactory, include, init } from '../mixins.mjs';
import { disposableMixin } from './DisposableLike.mixins.mjs';
import { add, dispose } from './DisposableLike.operators.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';

const disposableRefMixin = /*@__PURE__*/ (() => {
    const DisposableRef_private_current = Symbol("DisposableRef_private_current");
    return pipe(mixin(function DisposableRef(instance, defaultValue) {
        unsafeCast(instance);
        instance[DisposableRef_private_current] = defaultValue;
        pipe(instance, add(defaultValue));
        return instance;
    }, props({
        [DisposableRef_private_current]: none,
    }), {
        get [MutableRefLike_current]() {
            unsafeCast(this);
            return this[DisposableRef_private_current];
        },
        set [MutableRefLike_current](v) {
            unsafeCast(this);
            const oldValue = this[DisposableRef_private_current];
            pipe(oldValue, dispose());
            this[DisposableRef_private_current] = v;
            pipe(this, add(v));
        },
    }), returns);
})();
const createDisposableRef = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = disposableRefMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedDisposableRefMixin), function DisposableRef(instance, initialValue) {
        init(disposableMixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
    }));
})();

export { createDisposableRef, disposableRefMixin };
