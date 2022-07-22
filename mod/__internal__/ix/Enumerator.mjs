/// <reference types="./Enumerator.d.ts" />
import { EnumeratorLike_current, hasCurrent, EnumeratorLike_hasCurrent } from '../../ix/EnumeratorLike.mjs';
import '../../util/DisposableLike.mjs';
import { none } from '../../util/Option.mjs';
import { raise } from '../../util/functions.mjs';
import { isDisposed } from '../util/DisposableLike.mjs';

const Enumerator_private_current = Symbol("Enumerator_private_current");
const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
const properties = {
    [Enumerator_private_current]: none,
    [Enumerator_private_hasCurrent]: false,
};
const prototype = {
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

export { properties, prototype };
