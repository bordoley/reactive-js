/// <reference types="./Enumerator.pairwise.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PairwiseLike_hasPrev, PairwiseLike_prev, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_pairwise = /*@__PURE__*/ (() => returns(createInstanceFactory(mix(include(MutableEnumerator_mixin(), Delegating_mixin(), Disposable_delegatingMixin), function PairwiseEnumerator(instance, delegate) {
    init(MutableEnumerator_mixin(), instance);
    init(Delegating_mixin(), instance, delegate);
    init(Disposable_delegatingMixin, instance, delegate);
    return instance;
}, props({
    [PairwiseLike_prev]: none,
    [PairwiseLike_hasPrev]: false,
}), {
    [EnumeratorLike_move]() {
        this[MutableEnumeratorLike_reset]();
        const delegate = this[DelegatingLike_delegate];
        const delegateHasCurrent = delegate[EnumeratorLike_move]();
        if (delegateHasCurrent && this[PairwiseLike_hasPrev]) {
            const next = delegate[EnumeratorLike_current];
            this[EnumeratorLike_current] = [this[PairwiseLike_prev], next];
            this[PairwiseLike_prev] = next;
            return true;
        }
        else if (delegateHasCurrent) {
            this[PairwiseLike_prev] = delegate[EnumeratorLike_current];
            this[PairwiseLike_hasPrev] = true;
            return this[EnumeratorLike_move]();
        }
        else {
            return false;
        }
    },
}))))();
export default Enumerator_pairwise;
