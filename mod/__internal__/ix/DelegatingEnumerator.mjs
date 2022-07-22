/// <reference types="./DelegatingEnumerator.d.ts" />
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, move as move$1 } from '../../ix/EnumeratorLike.mjs';
import { none } from '../../util/Option.mjs';

const Enumerator_private_delegate = Symbol("Enumerator_private_delegate");
const properties = {
    [Enumerator_private_delegate]: none,
};
const prototype = {
    get [EnumeratorLike_current]() {
        const self = this;
        return self[Enumerator_private_delegate][EnumeratorLike_current];
    },
    get [EnumeratorLike_hasCurrent]() {
        const self = this;
        return self[Enumerator_private_delegate][EnumeratorLike_hasCurrent];
    },
};
const init = (self, delegate) => {
    self[Enumerator_private_delegate] = delegate;
};
const move = (enumerator) => move$1(enumerator[Enumerator_private_delegate]);

export { init, move, properties, prototype };
