/// <reference types="./Enumerator.distinctUntilChanged.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, DistinctUntilChangedLike_equality, DistinctUntilChangedLike_hasValue, DistinctUntilChangedLike_prev, } from "../../__internal__/types.js";
import { none, strictEquality, unsafeCast, } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const Enumerator_distinctUntilChanged = /*@__PURE__*/ (() => {
    const createDistinctUntilChangedEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_delegatingMixin), function DistinctUntilChangedEnumerator(instance, delegate, equality) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[DistinctUntilChangedLike_equality] = equality;
        return instance;
    }, props({
        [DistinctUntilChangedLike_equality]: none,
        [DistinctUntilChangedLike_prev]: none,
        [DistinctUntilChangedLike_hasValue]: false,
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
            const equality = this[DistinctUntilChangedLike_equality];
            while (delegate[EnumeratorLike_move]()) {
                const next = delegate[EnumeratorLike_current];
                if (!this[DistinctUntilChangedLike_hasValue] ||
                    !equality(this[DistinctUntilChangedLike_prev], next)) {
                    this[DistinctUntilChangedLike_prev] = next;
                    this[DistinctUntilChangedLike_hasValue] = true;
                    break;
                }
            }
            return delegate[EnumeratorLike_hasCurrent];
        },
    }));
    return (options = {}) => {
        const { equality = strictEquality } = options ?? {};
        return (delegate) => createDistinctUntilChangedEnumerator(delegate, equality);
    };
})();
export default Enumerator_distinctUntilChanged;
