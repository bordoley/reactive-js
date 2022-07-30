/// <reference types="./EnumeratorLikeMixin.d.ts" />
import { pipe, none, raise, returns } from '../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../util.mjs';
import '../../util/DisposableLike.mjs';
import { Object_properties, Object_init } from './Object.mjs';
import { isDisposed } from './DisposableLikeInternal.mjs';

const enumeratorMixin = /*@__PURE__*/ (() => {
    const Enumerator_private_current = Symbol("Enumerator_private_current");
    const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
    return pipe({
        [Object_properties]: {
            [Enumerator_private_current]: none,
            [Enumerator_private_hasCurrent]: false,
        },
        [Object_init]() {
            this[Enumerator_private_hasCurrent] = false;
        },
        get [EnumeratorLike_current]() {
            const self = this;
            return self[EnumeratorLike_hasCurrent]
                ? self[Enumerator_private_current]
                : raise();
        },
        set [EnumeratorLike_current](v) {
            const self = this;
            if (!isDisposed(self)) {
                self[Enumerator_private_current] = v;
                self[Enumerator_private_hasCurrent] = true;
            }
        },
        get [EnumeratorLike_hasCurrent]() {
            const self = this;
            return !isDisposed(self) && self[Enumerator_private_hasCurrent];
        },
    }, returns);
})();

export { enumeratorMixin };
