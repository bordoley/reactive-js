/// <reference types="./DelegatingEnumerator.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, raise, returns } from '../../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import Enumerator_move from '../Enumerator/Enumerator.move.mjs';
import { DelegatingEnumerator_move_delegate } from '../ix.internal.mjs';

const DelegatingEnumerator_mixin = /*@__PURE__*/ (() => {
    const DelegatingEnumerator_private_delegate = Symbol("DelegatingEnumerator_private_delegate");
    return pipe(mix(function DelegatingEnumerator(instance, delegate) {
        instance[DelegatingEnumerator_private_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingEnumerator_private_delegate]: none,
    }), {
        get [EnumeratorLike_current]() {
            var _a, _b;
            unsafeCast(this);
            return ((_b = (_a = this[DelegatingEnumerator_private_delegate]) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise());
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[DelegatingEnumerator_private_delegate][EnumeratorLike_hasCurrent];
        },
        [DelegatingEnumerator_move_delegate]() {
            const delegate = this[DelegatingEnumerator_private_delegate];
            return Enumerator_move(delegate);
        },
    }), returns);
})();

export { DelegatingEnumerator_mixin as default };
