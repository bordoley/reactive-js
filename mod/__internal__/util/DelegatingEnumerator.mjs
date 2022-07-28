/// <reference types="./DelegatingEnumerator.d.ts" />
import { raise } from '../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../util.mjs';
import { move as move$1 } from '../../util/EnumeratorLike.mjs';
import { Object_properties, anyProperty, Object_init } from './Object.mjs';

const DelegatingEnumerator_move_delegate = Symbol("DelegatingEnumerator_move_delegate");
const prototype = /*@__PURE__*/ (() => {
    const DelegatingEnumerator_private_delegate = Symbol("DelegatingEnumerator_private_delegate");
    const prototype = {
        [Object_properties]: {
            [DelegatingEnumerator_private_delegate]: anyProperty,
        },
        [Object_init](delegate) {
            this[DelegatingEnumerator_private_delegate] = delegate;
        },
        get [EnumeratorLike_current]() {
            var _a, _b;
            const self = this;
            return ((_b = (_a = self[DelegatingEnumerator_private_delegate]) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise());
        },
        get [EnumeratorLike_hasCurrent]() {
            const self = this;
            return self[DelegatingEnumerator_private_delegate][EnumeratorLike_hasCurrent];
        },
        [DelegatingEnumerator_move_delegate]() {
            const delegate = this[DelegatingEnumerator_private_delegate];
            return move$1(delegate);
        },
    };
    return () => prototype;
})();
const move = (enumerator) => enumerator[DelegatingEnumerator_move_delegate]();

export { move, prototype };
