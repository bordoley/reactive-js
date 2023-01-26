/// <reference types="./DisposableRef.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, unsafeCast, none, returns } from '../../../functions.mjs';
import Disposable_add from '../Disposable/Disposable.add.mjs';
import Disposable_dispose from '../Disposable/Disposable.dispose.mjs';
import { MutableRefLike_current } from '../util.internal.mjs';

const DisposableRef_mixin = /*@__PURE__*/ (() => {
    const DisposableRef_private_current = Symbol("DisposableRef_private_current");
    return pipe(mix(function DisposableRef(instance, defaultValue) {
        unsafeCast(instance);
        instance[DisposableRef_private_current] = defaultValue;
        pipe(instance, Disposable_add(defaultValue));
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
            pipe(oldValue, Disposable_dispose());
            this[DisposableRef_private_current] = v;
            pipe(this, Disposable_add(v));
        },
    }), returns);
})();

export { DisposableRef_mixin as default };
