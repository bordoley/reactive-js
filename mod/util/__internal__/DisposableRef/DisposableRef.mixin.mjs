/// <reference types="./DisposableRef.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, unsafeCast, none, returns } from '../../../functions.mjs';
import Disposable_add from '../Disposable/Disposable.add.mjs';
import Disposable_dispose from '../Disposable/Disposable.dispose.mjs';
import { MutableRefLike_current } from '../util.internal.mjs';

const DisposableRef_mixin = /*@__PURE__*/ (() => {
    const DisposableRefMixin_current = Symbol("DisposableRefMixin_current");
    return pipe(mix(function DisposableRef(instance, defaultValue) {
        unsafeCast(instance);
        instance[DisposableRefMixin_current] = defaultValue;
        pipe(instance, Disposable_add(defaultValue));
        return instance;
    }, props({
        [DisposableRefMixin_current]: none,
    }), {
        get [MutableRefLike_current]() {
            unsafeCast(this);
            return this[DisposableRefMixin_current];
        },
        set [MutableRefLike_current](v) {
            unsafeCast(this);
            const oldValue = this[DisposableRefMixin_current];
            pipe(oldValue, Disposable_dispose());
            this[DisposableRefMixin_current] = v;
            pipe(this, Disposable_add(v));
        },
    }), returns);
})();

export { DisposableRef_mixin as default };
