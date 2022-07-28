/// <reference types="./Enumerator.d.ts" />
import { raise, pipe } from '../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from '../../util.mjs';
import '../../util/DisposableLike.mjs';
import { hasCurrent } from '../../util/EnumeratorLike.mjs';
import { prototype as prototype$1 } from './Disposable.mjs';
import { Object_properties, anyProperty, Object_init, init, mixWith, createObjectFactory } from './Object.mjs';
import { isDisposed } from './DisposableLikeInternal.mjs';

const prototype = /*@__PURE__*/ (() => {
    const Enumerator_private_current = Symbol("Enumerator_private_current");
    const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
    const description = {
        [Object_properties]: {
            [Enumerator_private_current]: anyProperty,
            [Enumerator_private_hasCurrent]: false,
        },
        [Object_init]() {
            this[Enumerator_private_hasCurrent] = false;
        },
        get [EnumeratorLike_current]() {
            const self = this;
            return hasCurrent(self) ? self[Enumerator_private_current] : raise();
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
    };
    return () => description;
})();
const neverEnumerator = /*@__PURE__*/ (() => pipe({
    [Object_properties]: {},
    [Object_init]() {
        init(prototype$1, this);
    },
    get [EnumeratorLike_current]() {
        return raise();
    },
    get [EnumeratorLike_hasCurrent]() {
        return false;
    },
    [SourceLike_move]() { },
}, mixWith(prototype$1), createObjectFactory()))();

export { neverEnumerator, prototype };
