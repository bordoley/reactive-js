/// <reference types="./MutableEnumerator.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, raise, returns } from '../../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';

const MutableEnumerator_mixin = 
/*@__PURE__*/ (() => {
    const Enumerator_private_current = Symbol("Enumerator_private_current");
    const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
    return pipe(mix(function EnumeratorMixin(instance) {
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
            if (!Disposable_isDisposed(this)) {
                this[Enumerator_private_current] = v;
                this[Enumerator_private_hasCurrent] = true;
            }
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return (!Disposable_isDisposed(this) &&
                this[Enumerator_private_hasCurrent]);
        },
    }), returns);
})();

export { MutableEnumerator_mixin as default };
