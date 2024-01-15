/// <reference types="./Enumerable.pairwise.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, pipe, returns, tuple } from "../../../functions.js";
import DelegatingEnumeratorMixin, { DelegatingEnumeratorMixinLike_delegate, } from "../../__mixins__/DelegatingEnumeratorMixin.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_pairwise = /*@__PURE__*/ (() => {
    const PairwiseEnumerator_hasPrev = Symbol("PairwiseEnumerator_hasPrev");
    const PairwiseEnumerator_prev = Symbol("PairwiseEnumerator_prev");
    const createPairwiseEnumerator = mixInstanceFactory(include(MutableEnumeratorMixin(), DelegatingEnumeratorMixin()), function PairwiseEnumerator(instance, delegate) {
        init(MutableEnumeratorMixin(), instance);
        init(DelegatingEnumeratorMixin(), instance, delegate);
        return instance;
    }, props({
        [PairwiseEnumerator_hasPrev]: false,
        [PairwiseEnumerator_prev]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[DelegatingEnumeratorMixinLike_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            if (delegateHasCurrent && this[PairwiseEnumerator_hasPrev]) {
                const next = delegate[EnumeratorLike_current];
                this[EnumeratorLike_current] = tuple(this[PairwiseEnumerator_prev], next);
                this[PairwiseEnumerator_prev] = next;
                return true;
            }
            else if (delegateHasCurrent) {
                this[PairwiseEnumerator_prev] = delegate[EnumeratorLike_current];
                this[PairwiseEnumerator_hasPrev] = true;
                return this[EnumeratorLike_move]();
            }
            else {
                this[EnumeratorLike_isCompleted] = true;
                return false;
            }
        },
    });
    return pipe(createPairwiseEnumerator, Enumerable_lift, returns);
})();
export default Enumerable_pairwise;
