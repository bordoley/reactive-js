/// <reference types="./Enumerator.skipFirst.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { max } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { CountingLike_count, DelegatingLike_delegate, } from "../../__internal__/types.js";
import { unsafeCast } from "../../functions.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
const Enumerator_skipFirst = /*@__PURE__*/ (() => {
    const createSkipFirstEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_delegatingMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[CountingLike_count] = skipCount;
        return instance;
    }, props({
        [CountingLike_count]: 0,
        [EnumeratorLike_isCompleted]: false,
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
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            const delegate = this[DelegatingLike_delegate];
            this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];
            while (delegate[EnumeratorLike_move]()) {
                this[CountingLike_count] = max(this[CountingLike_count] - 1, -1);
                if (this[CountingLike_count] < 0) {
                    break;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (count) => (delegate) => createSkipFirstEnumerator(delegate, count);
})();
export default Enumerator_skipFirst;
