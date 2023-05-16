/// <reference types="./Enumerator.skipFirst.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, SkipFirstLike_count, SkipFirstLike_skipCount, } from "../../__internal__/types.js";
import { unsafeCast } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const Enumerator_skipFirst = /*@__PURE__*/ (() => {
    const createSkipFirstEnumerator = createInstanceFactory(mix(include(Delegating_mixin()), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(Delegating_mixin(), instance, delegate);
        instance[SkipFirstLike_skipCount] = skipCount;
        instance[SkipFirstLike_count] = 0;
        return instance;
    }, props({
        [SkipFirstLike_skipCount]: 0,
        [SkipFirstLike_count]: 0,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            const delegate = this[DelegatingLike_delegate];
            while (delegate[EnumeratorLike_move]()) {
                this[SkipFirstLike_count]++;
                if (this[SkipFirstLike_count] > this[SkipFirstLike_skipCount]) {
                    break;
                }
            }
            return delegate[EnumeratorLike_hasCurrent];
        },
    }));
    return (options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return (delegate) => createSkipFirstEnumerator(delegate, count);
    };
})();
export default Enumerator_skipFirst;
