/// <reference types="./DisposableRefLike.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, unsafeCast, none, returns } from '../../../functions.mjs';
import DisposableLike__add from '../DisposableLike/DisposableLike.add.mjs';
import DisposableLike__dispose from '../DisposableLike/DisposableLike.dispose.mjs';
import { MutableRefLike_current } from '../util.internal.mjs';

const DisposableRefLike__mixin = /*@__PURE__*/ (() => {
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

export { DisposableRefLike__mixin as default };
