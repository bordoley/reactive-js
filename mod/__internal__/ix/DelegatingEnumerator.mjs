/// <reference types="./DelegatingEnumerator.d.ts" />
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, move as move$1 } from '../../ix/EnumeratorLike.mjs';
import { none } from '../../util/Option.mjs';
import { raise } from '../../util/functions.mjs';
import { Object_init } from '../util/Object.mjs';

const DelegatingEnumerator_private_delegate = Symbol("DelegatingEnumerator_private_delegate");
const properties = {
    [DelegatingEnumerator_private_delegate]: none,
};
const prototype = {
    [Object_init](delegate) {
        this[DelegatingEnumerator_private_delegate] = delegate;
    },
    get [EnumeratorLike_current]() {
        var _a, _b;
        const self = this;
        return ((_b = (_a = self[DelegatingEnumerator_private_delegate]) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise());
    },
    get [EnumeratorLike_hasCurrent]() {
        var _a, _b;
        const self = this;
        return ((_b = (_a = self[DelegatingEnumerator_private_delegate]) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_hasCurrent]) !== null && _b !== void 0 ? _b : false);
    },
};
const move = (enumerator) => {
    const delegate = enumerator[DelegatingEnumerator_private_delegate];
    return (delegate && move$1(delegate)) || false;
};

export { move, properties, prototype };
