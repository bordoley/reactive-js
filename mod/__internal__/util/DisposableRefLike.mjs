/// <reference types="./DisposableRefLike.d.ts" />
import { pipe, unsafeCast, none, returns } from '../../functions.mjs';
import DisposableLike__add from '../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__dispose from '../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposableMixin from '../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { mix, props, createInstanceFactory, include, init } from '../mixins.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';

const disposableRefMixin = /*@__PURE__*/ (() => {
    const DisposableRef_private_current = Symbol("DisposableRef_private_current");
    return pipe(mix(function DisposableRef(instance, defaultValue) {
        unsafeCast(instance);
        instance[DisposableRef_private_current] = defaultValue;
        pipe(instance, DisposableLike__add(defaultValue));
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
            pipe(oldValue, DisposableLike__dispose());
            this[DisposableRef_private_current] = v;
            pipe(this, DisposableLike__add(v));
        },
    }), returns);
})();
const createDisposableRef = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = disposableRefMixin();
    return createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedDisposableRefMixin), function DisposableRef(instance, initialValue) {
        init(DisposableLike__disposableMixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
    }));
})();

export { createDisposableRef, disposableRefMixin };
