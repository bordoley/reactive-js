/// <reference types="./MutableEnumeratorLike.mixin.d.ts" />
import { mixin, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, raise, returns } from '../../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';

const mutableMixin = /*@__PURE__*/ (() => {
    const Enumerator_private_current = Symbol("Enumerator_private_current");
    const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
    return pipe(mixin(function EnumeratorMixin(instance) {
        instance[Enumerator_private_hasCurrent] = false;
        return instance;
    }, props({
        [Enumerator_private_current]: none,
        [Enumerator_private_hasCurrent]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent]
                ? this[Enumerator_private_current]
                : raise();
        },
        set [EnumeratorLike_current](v) {
            unsafeCast(this);
            if (!isDisposed(this)) {
                this[Enumerator_private_current] = v;
                this[Enumerator_private_hasCurrent] = true;
            }
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return (!isDisposed(this) &&
                this[Enumerator_private_hasCurrent]);
        },
    }), returns);
})();

export { mutableMixin as default };
