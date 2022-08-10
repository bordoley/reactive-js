/// <reference types="./__internal__Enumerators.d.ts" />
import { pipe, unsafeCast, none, raise, returns } from '../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../util.mjs';
import { isDisposed } from './__internal__DisposableLike.mjs';
import { clazz } from './__internal__Objects.mjs';

const enumeratorMixin = 
/*@__PURE__*/ (() => {
    const Enumerator_private_current = Symbol("Enumerator_private_current");
    const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
    return pipe(clazz(function EnumeratorMixin(instance) {
        unsafeCast(instance);
        instance[Enumerator_private_hasCurrent] = false;
        return instance;
    }, {
        [Enumerator_private_current]: none,
        [Enumerator_private_hasCurrent]: false,
    }, {
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
            return !isDisposed(this) && this[Enumerator_private_hasCurrent];
        },
    }), returns);
})();

export { enumeratorMixin };
