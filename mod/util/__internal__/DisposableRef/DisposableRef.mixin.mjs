/// <reference types="./DisposableRef.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, unsafeCast, none, returns } from '../../../functions.mjs';
import Disposable$add from '../Disposable/Disposable.add.mjs';
import Disposable$dispose from '../Disposable/Disposable.dispose.mjs';
import { MutableRefLike_current } from '../util.internal.mjs';

const DisposableRef$mixin = /*@__PURE__*/ (() => {
    const DisposableRef_private_current = Symbol("DisposableRef_private_current");
    return pipe(mix(function DisposableRef(instance, defaultValue) {
        unsafeCast(instance);
        instance[DisposableRef_private_current] = defaultValue;
        pipe(instance, Disposable$add(defaultValue));
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
            pipe(oldValue, Disposable$dispose());
            this[DisposableRef_private_current] = v;
            pipe(this, Disposable$add(v));
        },
    }), returns);
})();

export { DisposableRef$mixin as default };
