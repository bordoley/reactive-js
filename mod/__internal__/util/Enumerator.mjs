/// <reference types="./Enumerator.d.ts" />
import { none, raise, pipe } from '../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from '../../util.mjs';
import '../../util/DisposableLike.mjs';
import { hasCurrent } from '../../util/EnumeratorLike.mjs';
import { prototype as prototype$1 } from './Disposable.mjs';
import { Object_properties, Object_init, mix, init, createObjectFactory } from './Object.mjs';
import { isDisposed } from './DisposableLikeInternal.mjs';

const Enumerator_private_current = Symbol("Enumerator_private_current");
const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
const properties = {
    [Enumerator_private_current]: none,
    [Enumerator_private_hasCurrent]: false,
};
const prototype = {
    [Object_properties]: properties,
    [Object_init]() {
        this[Enumerator_private_current] = none;
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
const neverEnumerator = /*@__PURE__*/ (() => pipe(mix(prototype$1, {
    [Object_properties]: prototype$1[Object_properties],
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
}), createObjectFactory()))();

export { neverEnumerator, prototype };
